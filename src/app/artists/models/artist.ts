import { Album } from 'src/app/albums/models/album';

export interface IArtist {
  name: string;
  thumbnail: string;
  albums: Album[];
}
