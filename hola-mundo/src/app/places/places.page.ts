import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { place } from './place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  titulo: string = 'Lugares del mundo';
  places: place[] = [];

  constructor(private _placeService: PlacesService, private router: Router) {}

  ngOnInit() {
    this.places = this._placeService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this._placeService.getPlaces();
  }

  newPlace() {
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
