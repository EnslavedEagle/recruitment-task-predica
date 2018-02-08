import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components';

import { LinksService } from '../services/links.service';

import { FilterCategoriesPipe } from '../pipes/filter-categories.pipe';
import { FilterLinksPipe } from '../pipes/filter-links.pipe';
import { FixLinksPipe } from '../pipes/fix-links.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FilterCategoriesPipe,
    FilterLinksPipe,
    FixLinksPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    LinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
