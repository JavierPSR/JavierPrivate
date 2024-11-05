import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {
  
  titulo_pagina: string = 'Añadir nuevo lugar';
  holder_titulo: string = 'Escribir un título';
  holder_image: string = 'Escribe una url de una imagen';
  text_button_save: string = 'Grabar';

  constructor(private placeService: PlacesService, private router: Router) {}

  ngOnInit() {}

  saveNewPlace(title: IonInput, image: IonInput) {
    this.placeService.addPlace(
      title.value?.toString(),
      image.value?.toString()
    );
    this.router.navigate(['/places']);
  }
}
