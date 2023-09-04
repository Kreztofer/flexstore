import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Featured } from 'src/app/shared/models/featured';
import { HttpClient } from '@angular/common/http';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LatestService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getLatest(): Observable<Featured[]> {
    return of([
      {
        id: 1,
        pictureUrl: '../../../assets/images/shoe1.png',
        name: 'Nike Ventures',
        rating: 4,
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
        rating: 4,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 3,
        pictureUrl: '../../../assets/images/shoe3.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 4,
        pictureUrl: '../../../assets/images/shoe9.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
      {
        id: 5,
        pictureUrl: '../../../assets/images/shoe5.png',
        name: 'Nike Ventures',
        description: 'Hello',
        rating: 4,
        price: 2500,
        productType: 'blue',
        productBrand: 'nike',
      },
    ]);
  }
  getLatestProducts() {
    return this.http.get<Pagination<Featured[]>>(
      this.baseUrl + 'products?featuredId=3'
    );
  }
}
