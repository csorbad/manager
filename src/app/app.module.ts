import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FinanceComponent } from './finance/finance.component';

import { LibraryComponent } from './library/library.component';
import { LibraryService } from './library/library.service';
import { LibraryModalComponent } from './library/library.modal/library.modal.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibraryComponent,
    LibraryModalComponent,
    FinanceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    LibraryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
