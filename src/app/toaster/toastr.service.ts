import { Injectable } from "@angular/core";
import { ToastrConfig } from './toastr.config';
import { config } from 'process';
import { Alert } from './alert.model';

@Injectable({
    providedIn: "root"
})
export class ToastrService {

    settings: any;

    title: String;
    subtitle: String;

    alerts: Alert[] = [];

    colors = [
        { title: "danger", color1: "#ff3f34", color2: "#ff5e57" },
        { title: "success", color1: "#05c46b", color2: "#0be881" },
        { title: "info", color1: "#3c40c6", color2: "#575fcf" },
        { title: "warning", color1: "#ffa801", color2: "#ffc048" }
    ]

    show(type: String, title: String, subtitle: String, timeout?) {
        console.log(type.toLocaleString());

        this.settings = this.colors.find((e) => {
            return e.title == type
        });

        this.alerts.push(new Alert(title, subtitle, this.settings.color1, this.settings.color2));
        setTimeout(() => {
            this.alerts.splice(0, 1);
        }, timeout ?? 5000);
    }
}