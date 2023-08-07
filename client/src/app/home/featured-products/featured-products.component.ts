import { Component, OnInit } from '@angular/core';
import { FeaturedService } from './featured.service';
import { Featured } from 'src/app/shared/models/featured';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  featured: Featured[] = [];

  constructor(private featuredService: FeaturedService) {}

  ngOnInit() {
    this.getProducts();
    // this.getTestProducts();
  }
  getProducts() {
    this.featuredService.getFeaturedProducts().subscribe({
      next: (response) => (this.featured = response.data),
      error: (error) => console.log(error),
    });
  }
  getTestProducts() {
    this.featuredService.getFeatured().subscribe({
      next: (response) => (this.featured = response),
      error: (error) => console.log(error),
    });
  }
}
