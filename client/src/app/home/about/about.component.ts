import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/shared/models/about';
import { AboutService } from './about.mock.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  abouts: About[] = [];
  products: Product[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.getAbout();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((abouts) => (this.abouts = abouts));
  }

}
