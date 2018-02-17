import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { FinanceComponent } from './finance/finance.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'library', component: LibraryComponent },
];
