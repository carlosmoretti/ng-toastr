import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export abstract class ToastrConfig implements OnInit {
    ngToastrSetup() {
    }

    ngOnInit() {
        this.ngToastrSetup();
    }
}