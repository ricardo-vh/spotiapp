import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio Spotify Listo...')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBfwz24O-_Xs-cXQU1TwjdbC5yd5NtZMbIy5hINVoC3ULALQNlZXcNHGbQ50Sbu3VbV2LEMTmIDU2lwLgM'
    });
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=15').pipe(map( data => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }
}
