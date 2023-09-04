import { Injectable } from '@angular/core';
import { IAboutService } from './about.service.interface';
import { Observable, of } from 'rxjs';
import { About } from 'src/app/shared/models/about';
import { Product } from 'src/app/shared/models/product';
import { HttpClient } from '@angular/common/http';
import { Pagination } from 'src/app/shared/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) {}

  getAbout(): Observable<About[]> {
    return of([
      {
        id: 1,
        img: '../../../assets/images/delivery.png',
        heading: 'Worldwide Delivery',
        about: 'We offer competitve prices on our 100 million plus product.',
      },
      {
        id: 2,
        img: '../../../assets/images/payment.png',
        heading: 'Very Safe payment',
        about: 'We offer competitve prices on our 100 million plus product.',
      },
      {
        id: 3,
        img: '../../../assets/images/support.png',
        heading: '24/7 Support',
        about: 'We offer competitve prices on our 100 million plus product.',
      },
    ]);
  }
}
