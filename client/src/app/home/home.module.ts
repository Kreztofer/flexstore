import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, AboutComponent, HeroComponent,FeaturedProductsComponent,MobileAppComponent,TestimonialComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
