import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { ComponentFramesProfileComponent } from './components/component-frames-profile/component-frames-profile.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SharedComponent } from './components/shared/shared.component';

import { ComponentProfileComponent } from './components/component-profile/component-profile.component';
import { FacebookModule } from 'ngx-facebook';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentFramesProfileComponent,
    HomeComponent,
    SharedComponent,
    ComponentProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    AppRoutingModule,
    FacebookModule.forRoot()
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
