import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Footer } from 'src/app/shared/models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerItems: Footer[] = [];

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerService
      .getFooter()
      .subscribe((footer) => (this.footerItems = footer));
  }
}
