import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/shared/models/about';
import { AboutService } from './about.mock.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  abouts: About[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.getAbout().subscribe((abouts) => (this.abouts = abouts));
  }
}
