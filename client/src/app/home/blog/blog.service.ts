import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getBlogItems() {
    return this.http.get<Blog[]>(this.baseUrl + 'blog');
  }
}
