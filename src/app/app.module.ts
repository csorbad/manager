import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { FinanceComponent } from './finance/finance.component';
import { LibraryService } from './library/library.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibraryComponent,
    FinanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    LibraryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
