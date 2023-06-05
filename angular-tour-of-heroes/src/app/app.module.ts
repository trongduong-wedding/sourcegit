import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TestBonComponent } from './test-bon/test-bon.component';
import { TestMotComponent } from './test-mot/test-mot.component';
import { TestHaiComponent } from './test-hai/test-hai.component';
import { TestBaComponent } from './test-ba/test-ba.component';
import { TestNamComponent } from './test-nam/test-nam.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    TestBonComponent,
    TestMotComponent,
    TestHaiComponent,
    TestBaComponent,
    TestNamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
