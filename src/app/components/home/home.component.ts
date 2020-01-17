import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  constructor( private spotifyService: SpotifyService ) {
    // se usó un pipe en la función para no teener que escribir todo el cuerpo del arreglo
    this.spotifyService.getNewReleases().
              subscribe((data: any) => {
                this.nuevasCanciones = data;
                console.log(data);
              });


  }


}
