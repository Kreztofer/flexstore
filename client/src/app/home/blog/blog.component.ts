import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from 'src/app/shared/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: Blog[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogItems().subscribe({
      next: (response) => (this.blog = response.splice(0, 2)),
      error: (err) => console.log(err),
    });
  }
}
