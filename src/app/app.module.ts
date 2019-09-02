import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CodeComponent } from './code/code.component';
import {HttpClientModule} from '@angular/common/http'
import { BackendService } from './backend.service';
import{FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    ContributeComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule   
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
