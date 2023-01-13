import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoldDirectiveDirective } from './bold-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    AccueilComponent,
    BoldDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
