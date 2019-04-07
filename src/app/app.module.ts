import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Material theme imports
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatIcon } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
