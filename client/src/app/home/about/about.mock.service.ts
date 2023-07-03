import { Injectable } from '@angular/core';
import { IAboutService } from './about.service.interface';
import { Observable, of } from 'rxjs';
import { About } from 'src/app/shared/models/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService implements IAboutService {
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
        heading: 'Safe payment',
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
