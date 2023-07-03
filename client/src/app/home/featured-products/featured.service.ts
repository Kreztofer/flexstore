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
        img: '../../../assets/images/shoe1.png',
        new: true,
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 2,
        img: '../../../assets/images/shoe2.png',
        name: 'Nike Ventures',
        rating: 4.5,
        price: '25,000',
      },
      {
        id: 3,
        img: '../../../assets/images/shoe3.png',
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 4,
        img: '../../../assets/images/shoe4.png',
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 5,
        img: '../../../assets/images/shoe5.png',
        new: true,
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 6,
        img: '../../../assets/images/shoe6.png',
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 7,
        img: '../../../assets/images/shoe7.png',
        name: 'Nike Ventures',
        rating: 4,
        price: '25,000',
      },
      {
        id: 8,
        img: '../../../assets/images/shoe8.png',
        new: true,
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
      {
        id: 9,
        img: '../../../assets/images/shoe9.png',
        name: 'Nike Ventures',
        rating: 5,
        price: '25,000',
      },
    ]);
  }
}
