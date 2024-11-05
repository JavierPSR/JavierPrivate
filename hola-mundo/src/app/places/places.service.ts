import { Injectable } from '@angular/core';
import { place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: place[] = [
    {
      id: '1',
      title: 'Torre Eifel',
      imageURL:
        'https://img.freepik.com/vector-premium/icono-vectorial-torre-eiffel-famoso-simbolo-atraccion-turistica-francia-monumento-arquitectonico-internacional-aislado-sobre-fondo-blanco-insignia-alta-calidad_87946-4839.jpg',
      comments: [
        'Maravilloa torre, preciosa',
        'una belleza, imporesionante altura',
      ],
    },

    {
      id: '2',
      title: 'Estatua de la libertad',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZaPpo9N4HkxrKN4AZ-Ni9hs89SajTUz0oA&s',
      comments: ['Es to bonito'],
    },

    {
      id: '3',
      title: 'Estatua de la libertad',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZaPpo9N4HkxrKN4AZ-Ni9hs89SajTUz0oA&s',
      comments: [],
    },
  ];

  constructor() {}

  /**
   * getPlaces: recupera un listado de ciudades
   * @returns Array de objetos de ciudades
   */
  getPlaces() {
    return [...this.places];
  }

  /**
   * getPlace: Recupera un objeto de tipo ciudad
   * @param placeID (Identificador del objeto de la calidad de recuperar)
   * @returns (Devuelve un ibjeto de ciudad, recuprando del listado completo dde ciudades)
   */

  getPlace(placeID: string | null) {
    return {
      ...this.places.find((place) => {
        return place.id === placeID;
      }),
    };
  }

  /**
   * addPlace: Añade una ciudad al listado de ciudades existente
   * @param title (titulo del objeto nueva ciudad a crear)
   * @param imageURL (Imagen del objeto de nueva ciudad a crear)
   */
  addPlace(title: string | undefined, imageURL: string | undefined) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: (this.places.length + 1).toString(),
    });
  }

  /**
   * deletePlace: Borra una ciudad localizada a traves de su identificador
   * @param placeID (Identificador de la ciudad a borrar)
   */
  deletePlace(placeID: string | null | undefined) {
    this.places = this.places.filter((place) => {
      return place.id != placeID;
    });
  }
}
