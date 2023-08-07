import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFeaturedService } from './featured.interface';
import { Featured } from 'src/app/shared/models/featured';

@Injectable({
  providedIn: 'root',
})
export class FeaturedService implements IFeaturedService {
  getFeatured(): Observable<Featured[]> {
    return of([
      {
        id: 1,
        pictureUrl: '../../../assets/images/shoe1.png',
        name: 'Nike Ventures',
        rating: 3,
        description: 'Hello',
        productType: 'blue',
        productBrand: 'nike',
        price: 25000,
      },
      {
        id: 2,
        pictureUrl: '../../../assets/images/shoe2.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 3,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 3,
        pictureUrl: '../../../assets/images/shoe3.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 3,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 4,
        pictureUrl: '../../../assets/images/shoe9.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4.5,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 5,
        pictureUrl: '../../../assets/images/shoe5.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 5,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 6,
        pictureUrl: '../../../assets/images/shoe6.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 7,
        pictureUrl: '../../../assets/images/shoe7.png',
        name: 'Nike Ventures',
        description: 'Hello',
        price: 2500,
        rating: 3.5,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 8,
        pictureUrl: '../../../assets/images/shoe8.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4.5,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
    ]);
  }
}
