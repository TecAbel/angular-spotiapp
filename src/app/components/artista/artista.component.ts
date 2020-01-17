import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';




@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  datosArtista: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) {
    router.params.subscribe( params => {
      // console.log(params.id);
      this.loading = true;
      this.getArtista( params.id );
    });

   }

  getArtista( id: string ) {
        this.spotify.getArtist( id ).subscribe( (data: any) => {
          console.log(data);
          this.datosArtista = data;
          this.loading = false;
        });
      }
}
