import { Injectable } from '@angular/core';
import {
  EMPTY,
  expand,
  map,
  mergeMap,
  Observable,
  of,
  reduce,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

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

export interface ISpotifySavedAlbums {
  items: ISpotifyAlbum[];
  next: string | null;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private spotifyService: SpotifyService) {}
  getSavedAlbums(): Observable<ISpotifyAlbum[]> {
    return this.spotifyService.get<any>('/me/albums?limit=50').pipe(
      expand<ISpotifySavedAlbums, Observable<ISpotifySavedAlbums>>((data) => {
        if (data.next) {
          return this.spotifyService.getFromURL(data.next);
        }
        return EMPTY;
      }),
      reduce(
        (accumulator: ISpotifyAlbum[], savedAlbums: ISpotifySavedAlbums) => {
          accumulator = [...accumulator, ...savedAlbums.items];
          return accumulator;
        },
        []
      )
    );
  }
}
