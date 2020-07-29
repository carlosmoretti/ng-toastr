import { NgModule } from '@angular/core';
import { ToastrComponent } from './toastr.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from './toastr.service';

@NgModule({
    providers:[
        ToastrService
    ],
    imports:[
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations:[ToastrComponent],
    exports:[ToastrComponent],
    bootstrap:[]
})
export class ToasterModule {
    static creator() {

    }
}