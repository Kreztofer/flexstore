import { Component, OnInit } from '@angular/core';
import { Featured } from 'src/app/shared/models/featured';
import { LatestService } from './latest.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent implements OnInit {
  latest: Featured[] = [];

  constructor(private latestService: LatestService) {}

  ngOnInit() {
    this.latestService
      .getLatest()
      .subscribe((latest) => (this.latest = latest));
  }
}
