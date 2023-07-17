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
        new: true,
        name: 'Nike Ventures',
        rating: true,
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
        rating: true,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 3,
        pictureUrl: '../../../assets/images/shoe3.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: true,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 4,
        pictureUrl: '../../../assets/images/shoe9.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: true,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 5,
        pictureUrl: '../../../assets/images/shoe5.png',
        new: true,
        name: 'Nike Ventures',
        description: 'Hello',
        rating: true,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 6,
        pictureUrl: '../../../assets/images/shoe6.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: true,
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
        rating: true,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 8,
        pictureUrl: '../../../assets/images/shoe8.png',
        new: true,
        name: 'Nike Ventures',
        description: 'Hello',
        rating: true,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
    ]);
  }
}
