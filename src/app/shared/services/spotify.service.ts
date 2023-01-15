import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ISpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface ISpotifyAlbum {
  album: {
    id: string;
    images: ISpotifyImage[];
    name: string;
    artists: {
      id: string;
      images: ISpotifyImage[];
      name: string;
    }[];
  };
}

interface ISpotifySavedAlbums {
  items: ISpotifyAlbum[];
  next: string | null;
  total: number;
}

interface IGetSavedAlbumsRequest {
  limit?: number;
  offset?: number;
}

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private baseUrl: string = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getSavedAlbums({
    offset = 0,
    limit = 50,
  }: IGetSavedAlbumsRequest): Observable<ISpotifySavedAlbums> {
    const url = `${this.baseUrl}/me/albums?limit=${limit}&offset=${offset}`;
    console.log(url);
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB05_CakAD52C0KHiOJkqDKv3r1Kr_9vf7p6BMOiACxpvbBQ4TYpQO_izGpux1juqYTrNP361jnlx5QVgckSSnGngOgUkpuZd0SJXJ0HcnwNxUwcQLfCUjEXG9nyPKamIN9yBZcM1VB5bsAlEMZiVW1VJtkNvNfHiVy65XkPejqTr7EaFkXnx6vPH03WA',
    });

    return this.http.get<ISpotifySavedAlbums>(url, { headers });
  }
}
