import { photo } from './photo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PhotosService {
  private url: string = "https://jsonplaceholder.typicode.com/photos?_limit=15"

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<photo[]>(this.url);
  }
}