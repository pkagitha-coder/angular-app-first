import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-component',
  templateUrl: './photos-component.component.html',
  styleUrls: ['./photos-component.component.css']
})
export class PhotosComponent implements OnInit {
  albumId;
  photos;
  constructor(
    private photosService : PhotosService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.photosService.getPhotos(this.albumId);
  }

}
