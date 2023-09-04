import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpened: boolean = false;
  date: any;
  year: any;
  
  constructor(
    public basketService: BasketService,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getDate();
  }

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
  getDate() {
    this.date = new Date();
    this.year = this.date.getFullYear();
  }
}
