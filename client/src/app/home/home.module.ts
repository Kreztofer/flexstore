import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { RouterModule } from '@angular/router';
import { LatestProductsComponent } from './latest-products/latest-products.component';
import { ShopModule } from '../shop/shop.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeroComponent,
    FeaturedProductsComponent,
    MobileAppComponent,
    LatestProductsComponent,
    BlogComponent,
  ],
  imports: [CommonModule, RouterModule, ShopModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
