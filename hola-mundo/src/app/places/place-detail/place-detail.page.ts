import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  miplace: place = { id: '', title: '', imageURL: '', comments: [] };
  texto_nocomentarios: string = 'No hay comentarios todavia ...';

  public place: place = {
    id: '',
    title: '',
    imageURL: '',
    comments: [],
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _placesService: PlacesService,
    private _router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('placeID');
      this.miplace = this._placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace() {
    const element = await this.alertCtrl.create({
      header: 'Estas seguro?',
      message: 'Ten cuidadito',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this._placesService.deletePlace(this.miplace.id);
            this._router.navigate(['/places']);
          },
        },
      ],
    });
    await element.present();
  }
}
