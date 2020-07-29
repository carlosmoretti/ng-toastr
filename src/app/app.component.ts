import { Component, OnInit } from '@angular/core';
import { ToastrConfig } from './toaster/toastr.config';
import { ToastrService } from './toaster/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngtoaster';

  constructor(private api: ToastrService) {
  }

  ngOnInit() {
    this.api.colors.push({
      title: "astg", color1: "red", color2: "blue"
    })
  }
  

}
