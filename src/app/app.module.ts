import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms'; //to help with the validation and reactiveness of the forms
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//working with reactives 
    BrowserAnimationsModule //Works with the reactive forms, making them actve 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
