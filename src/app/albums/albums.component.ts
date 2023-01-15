import { Component, OnInit } from '@angular/core';
import { Album } from './models/album';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  protected albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getSavedAlbums().subscribe((data) => {
      console.log(data);
      data.map((album: any) => {
        this.albums.push(
          Object.assign(
            {},
            {
              name: album.album.name,
              thumbnail: album.album.images[0].url,
            }
          )
        );
      });
    });
  }
}
