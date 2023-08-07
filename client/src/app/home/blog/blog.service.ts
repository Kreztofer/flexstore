import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}
  getBlogItems() {
    return this.http.get<Blog[]>(this.baseUrl + 'blog');
  }
}
