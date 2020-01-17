import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBknK3cjiEkO7NVONTtnz3w8dp7rvvIJe5hiVQP09ISS7LoqBIxbOzfe6fMELu8fnSXjXksHuKDk4tkgrc'
    });


    return this.http.get(url, {headers});
  }

  getNewReleases() {

    // `return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).pipe( map((data: any) => {
    //   return data.albums.items;
    // }));`

    return this.getQuery('browse/new-releases')
                .pipe( map((data: any) => {
                  // console.log(data);
                  return data.albums.items;
                }));

  }

  getArtist(termino: string) {

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, { headers }).
    // pipe( map( (data: any) => {
    //   return data.artists.items;
    // }));

    return this.getQuery(`search?q=${ termino }&type=artist`)
            .pipe(map( (data: any)=> {
              return data.artists.items;
            }));

  }
}
