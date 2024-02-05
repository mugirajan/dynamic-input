import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainformComponent } from './mainform/mainform.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { HttpClient, HttpHandler } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    MainformComponent,
    Form1Component,
    Form2Component,
    DynamicFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    DataService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
