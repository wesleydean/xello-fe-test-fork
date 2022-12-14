import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, locale: string): any {
    /**
     * 1 cad > 0.63 pound
     * 1 cad > 0.75 usd
     */

    switch (locale) {
      case 'en-ca':
        return `$${value} CAD`;
      case 'en-us':
        return `$${(value*.75).toFixed(2)} US`;
      case 'en-gb':
        return `£${(value*.63).toFixed(2)} GB`;
      default:
        return `$${value} CAD`;
    }
  }
}
