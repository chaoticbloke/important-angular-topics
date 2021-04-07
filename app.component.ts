import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Bootstrap Form';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  defaultSelect = 'Hard';
  handleSubmit(data: NgForm) {
    console.log(' form data = ', data.value);
  }
}
