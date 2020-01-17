import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  artistaId: string;

  @Input() items: any[] = [];
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  artista( item: any ){
    if(item.type === 'artist' ){
      this.artistaId = item.id;
    } else{
      this.artistaId = item.artists[0].id;
    }
    //console.log(this.artistaId);

    this.router.navigate(['/artista', this.artistaId]); 
  }

}
