import { Component, OnInit } from '@angular/core';
import { Artist } from './models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  protected artists: Artist[] = [];

  constructor() {}

  ngOnInit(): void {
    this.artists = [
      {
        name: 'AC/DC',
        thumbnail:
          'https://i.scdn.co/image/ab6761610000f178c4c77549095c86acb4e77b37',
      },
      {
        name: 'The doors',
        thumbnail:
          'https://i.scdn.co/image/ab6761610000f178440959e022afc20e819050bd',
      },
      {
        name: 'Deep purple',
        thumbnail:
          'https://i.scdn.co/image/ab6761610000f17823a7b4c49d285729a974d6dd',
      },
      {
        name: 'Paulinho da Viola',
        thumbnail:
          'https://i.scdn.co/image/ab6761610000f1784a115e8bfaa803b6d6a65955',
      },
      {
        name: 'Baia',
        thumbnail:
          'https://i.scdn.co/image/ab67616d00001e0268f0e7a04aacb78a8d845cd2',
      },
    ];
  }
}
