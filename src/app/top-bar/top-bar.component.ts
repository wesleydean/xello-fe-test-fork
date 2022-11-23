import { Component } from '@angular/core';
import { count, map, Observable, reduce, Subject } from 'rxjs';
import { FavouriteService } from '../services/favourite.service';
import { LocaleService } from '../services/locale.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  $favouriteList;
  locales;
  constructor(private localeService: LocaleService, private favouriteService: FavouriteService) {
    this.$favouriteList = this.favouriteService.$favourites
    this.locales = this.localeService.getLocales();
  }

  selectLocale($event: any) {
    console.log($event.target.value);
    this.localeService.updateLocale($event.target.value);
  }
}

