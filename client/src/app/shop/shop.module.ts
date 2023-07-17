import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent, ProductItemComponent],
  imports: [CommonModule, SharedModule, ShopRoutingModule, RouterModule],
  exports: [ProductItemComponent],
})
export class ShopModule {}
