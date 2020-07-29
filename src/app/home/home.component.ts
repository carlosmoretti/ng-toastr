import { Component } from '@angular/core';
import { ToastrService } from '../toaster/toastr.service';

@Component({
    templateUrl: "home.html"
})
export class HomeComponent {
    constructor(private api: ToastrService) {
        this.api.show("success", "Teste", "Teste");
    }
}