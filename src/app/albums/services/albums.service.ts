import { Injectable } from '@angular/core';
import { EMPTY, expand, map, Observable, reduce, tap } from 'rxjs';
import {
  ISpotifyAlbum,
  SpotifyService,
} from 'src/app/shared/services/spotify.service';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private spotifyService: SpotifyService) {}
  private getNextOffset(nextUrl: string): number {
    const urlParams = new URLSearchParams(nextUrl.split('albums')[1]);
    const offset = urlParams.get('offset');

    return offset ? parseInt(offset) : 0;
  }

  getAllSavedAlbums(): Observable<Album[]> {
    return this.spotifyService.getSavedAlbums({}).pipe(
      expand((data) => {
        if (data.next) {
          return this.spotifyService.getSavedAlbums({
            offset: this.getNextOffset(data.next),
          });
        }
        return EMPTY;
      }),
      reduce((accumulator: ISpotifyAlbum[], savedAlbums) => {
        accumulator = [...accumulator, ...savedAlbums.items];
        return accumulator;
      }, []),
      map((savedAlbums) =>
        savedAlbums.map((savedAlbum) => {
          const album: Album = {
            name: savedAlbum.album.name,
            thumbnail: savedAlbum.album.images[0].url,
          };

          return album;
        })
      )
    );
  }
}
