import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ISpotifyImage {
  url: string;
  height: number;
  width: number;
}

interface ISpotifyAlbum {
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

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private baseUrl: string = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getSavedAlbums(
    limit?: number,
    offset?: number
  ): Observable<ISpotifySavedAlbums> {
    const url = `${this.baseUrl}/me/albums?limit=${limit}&offset=${offset}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDckD5hCwlNt3-HMCK7ASlVsCPJGvGIvgbFvneh0rEW86J8SPjxaS30GMC_wiVoKasLJvFuZ8RBSnFjTdAYS7cwva6wmDDgv-Ic14JaWOdJMYTMWFfYpQJlbSYCcSvyEx7K_zUz_CnFWdMYnCa9oePCFeLwC8W5MQS3MKG-p3VqnNChDYSO9p7-MgKm0A',
    });

    return this.http.get<ISpotifySavedAlbums>(url, { headers });
  }
}
