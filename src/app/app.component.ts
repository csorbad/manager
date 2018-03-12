import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  defaultLang = 'en';
  activeLang = 'en';
  storagedLang: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.defaultLang);
    this.storagedLang = localStorage.getItem('activeLang');
    this.activeLang = this.storagedLang ? this.storagedLang : this.activeLang;
    this.translate.use(this.activeLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('activeLang', lang);
    this.activeLang = lang;
  }
}
