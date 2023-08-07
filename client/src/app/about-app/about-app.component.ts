import { Component, OnInit } from '@angular/core';
import { AboutAppService } from './about-app.service';
import { Blog } from '../shared/models/blog';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss'],
})
export class AboutAppComponent implements OnInit {
  blog: Blog[] = [];
  constructor(private aboutService: AboutAppService) {}

  ngOnInit(): void {
    this.aboutService.getBlogItems().subscribe({
      next: (res) => (this.blog = res),
      error: (err) => console.log(err),
    });
  }
}
