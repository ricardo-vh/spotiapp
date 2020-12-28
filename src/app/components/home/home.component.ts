import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  newReleases: any[] = [];
  looding: boolean;
  error: boolean;
  mensaje: string;

  constructor( private spotify: SpotifyService ) {
    this.looding = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data:any) => {
      this.newReleases = data;
      this.looding = false;
    }, (errorServicio => {
      this.looding= false;
      this.error = true;
      this.mensaje = errorServicio.error.error.message;
    }));
  }

}
