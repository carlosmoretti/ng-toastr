import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ToastrConfig } from './toastr.config';
import { ToastrService } from './toastr.service';

@Component({
    selector: "apptoastr",
    templateUrl: "toastr.view.html",
    styleUrls: ["toastr.css"],
    animations: [
        trigger(
            'inOutAnimation', 
                [
                    transition(
                    ':enter', 
                    [
                        style({ opacity: 0 }),
                        animate('0.5s ease-out', 
                                style({ opacity: 1 }))
                    ]
                    ),
                    transition(
                    ':leave', 
                    [
                        style({ opacity: 1 }),
                        animate('0.5s ease-in', 
                                style({ height: 0, opacity: 0 }))
                    ]
                    )
                ]
          )
    ]
})
export class ToastrComponent {

    constructor(private api: ToastrService) {
    }

    getGradient(i) {
        return `linear-gradient(90deg, ${this.api.alerts[i].color1} 0%, ${this.api.alerts[i].color2} 100%)`;
    }

    getBorder(i) {
        return `5px solid ${this.api.alerts[i].color1}`;
    }

    get alerts() {
        console.log(this.api.alerts);
        return this.api.alerts;
    }
}