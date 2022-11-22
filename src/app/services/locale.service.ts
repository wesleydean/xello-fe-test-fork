import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  currentlocale = 'en-ca';
  private locale = new BehaviorSubject<string>(this.currentlocale);
  $locale = this.locale.asObservable().pipe(share());

  updateLocale(locale: string): void {
    this.currentlocale = locale;
    this.locale.next(locale);
  }

  getLocale(): Observable<string> {
    return this.$locale;
  }
}
