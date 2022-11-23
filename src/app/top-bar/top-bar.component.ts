import { Component } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  faveCount = 3
  constructor(private localeService: LocaleService) {
    //
  }
  locales = [
    {
      id: 1,
      value: 'en-ca',
    },
    {
      id: 2,
      value: 'en-us',
    },
    {
      id: 3,
      value: 'en-gb',
    },
  ];

  selectLocale($event: any) {
    console.log($event.target.value);
    this.localeService.updateLocale($event.target.value);
  }
}

