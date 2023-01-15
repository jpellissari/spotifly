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
    this.albumsService.getAllSavedAlbums().subscribe((data) => {
      this.albums = data;
    });
  }
}
