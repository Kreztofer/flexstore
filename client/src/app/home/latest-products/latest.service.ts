import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILatestService } from './latest.interface';
import { Featured } from 'src/app/shared/models/featured';

@Injectable({
  providedIn: 'root',
})
export class LatestService implements ILatestService {
  getLatest(): Observable<Featured[]> {
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
    ]);
  }
}
