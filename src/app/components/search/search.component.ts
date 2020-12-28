import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas: any[] = [];
  looding: boolean;

  constructor( private spotify: SpotifyService ) { }

  buscar(termino: string) {
    this.looding = true;
    this.spotify.getArtists( termino ).subscribe( (data:any) => {
      this.artistas = data;
      this.looding = false;
    });
  }

}
