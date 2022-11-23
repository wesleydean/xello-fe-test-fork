import { Component } from '@angular/core';
import { count, reduce } from 'rxjs';
import { FavouriteService } from '../services/favourite.service';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  faveCount$;
  constructor(private localeService: LocaleService, private favouriteService: FavouriteService) {
    this.faveCount$ = this.favouriteService.getFavourites().pipe(count());
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

