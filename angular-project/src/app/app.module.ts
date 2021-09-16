import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule, routingComponents} from './app-routing.module'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";


import { AppComponent } from './app.component';
import { SignupformComponent } from './signupform/signupform.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignupformComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
    
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
