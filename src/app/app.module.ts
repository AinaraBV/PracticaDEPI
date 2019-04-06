import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Material theme imports
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatIcon } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
