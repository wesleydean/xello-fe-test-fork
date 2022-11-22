import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryService } from './services/in-memory.service';
import { LocaleService } from './services/locale.service';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PricePipe } from './pipes/price.pipe';
@NgModule({
  declarations: [AppComponent, ProductListComponent, TopBarComponent, PricePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LocaleService, InMemoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
