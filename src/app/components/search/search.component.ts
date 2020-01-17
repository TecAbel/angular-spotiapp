import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  loading: boolean;

  constructor( private spotify: SpotifyService ) {
    
   }

  buscarArtista(termino: string ) {
    this.loading = true;
    // console.log(termino);
    
    this.spotify.getArtist(termino)
        .subscribe( (resp: any) => {
          console.log(resp);
          this.artistas = resp;
          this.loading = false;
        });
  }

}
