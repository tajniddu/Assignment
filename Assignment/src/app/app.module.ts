import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatIconModule,MatSlideToggleModule,MatButtonModule, NoConflictStyleCompatibilityMode } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  exports: [
   MatInputModule,
   MatSlideToggleModule,
   MatButtonModule,
   MatIconModule,
   FormsModule,
   ReactiveFormsModule,
   NoConflictStyleCompatibilityMode
  ]
})
export class inputClassesModule {}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    inputClassesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
