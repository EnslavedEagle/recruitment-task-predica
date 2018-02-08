import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components';

import { LinksService } from '../services/links.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
