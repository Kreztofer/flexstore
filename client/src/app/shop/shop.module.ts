import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent],
  imports: [CommonModule],
  exports: [ShopComponent],
})
export class ShopModule {}
