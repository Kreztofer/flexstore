import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IFooterService } from './footer.service.interface';
import { Footer } from 'src/app/shared/models/footer';

@Injectable({
  providedIn: 'root',
})
export class FooterService implements IFooterService {
  getFooter(): Observable<Footer[]> {
    return of([
      {
        id: 1,
        title: 'About Us',
        details: [
          { id: '1', detail: 'About Us' },
          { id: '2', detail: 'Our Stores' },
          { id: '3', detail: 'Our Cares' },
          { id: '4', detail: 'Terms & conditions' },
          { id: '5', detail: 'Privacy Policy' },
        ],
      },
      {
        id: 2,
        title: 'Customer Care',
        details: [
          { id: '1', detail: 'Help Center' },
          { id: '2', detail: 'How to Buy' },
          { id: '3', detail: 'Track Your Order' },
          { id: '4', detail: 'Corporate & Bulk Purchasing' },
          { id: '5', detail: 'Returns & Refunds' },
        ],
      },
      {
        id: 3,
        title: 'Contact Us',
        details: [
          { id: '1', detail: '70 Washingtom Square south, New York' },
          { id: '2', detail: 'Email: flexstores@gmail.com' },
        ],
      },
    ]);
  }
}
