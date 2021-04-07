import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AlertComponent } from './alert/alert.component';
import { FormsModule } from '@angular/forms';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AlertComponent,
    FormValidationsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
