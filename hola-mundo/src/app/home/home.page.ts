import { Component } from '@angular/core';
import { PhotosService } from './photos.service';
import { photo } from './photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public titulo: string = 'Listado de api de internet';
  public photos: photo[] = [
    { albumId: 0, id: 0, thumbnailUrl: '', title: '', url: '' },
  ];

  constructor(private _photosService: PhotosService) {}

  ngOnInit() {
    this._photosService.getPhotos().subscribe((data) => {
      console.log(data);
      this.photos = data;
    });
  }
}
