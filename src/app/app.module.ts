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
import { LibraryInfoComponent } from './library/library.info/library.info.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LibraryComponent,
    LibraryModalComponent,
    LibraryInfoComponent,
    FinanceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    LibraryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
