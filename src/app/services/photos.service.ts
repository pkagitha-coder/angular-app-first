import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient ) { }

  getAlbums(){
    const albums = this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
    console.log(albums);
    return albums;
  }

  getPhotos(albumId) {
    console.log(`https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`);
    const photos = this.httpClient.get(`https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`);

    return photos;
  }

}
