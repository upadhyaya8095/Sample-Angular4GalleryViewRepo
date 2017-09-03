import { ImageserviceService } from './../imageservice.service';
import { Component, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges, OnInit {
  title = 'Recent Photos';
  filterBy?: String = 'all';
  visibleImagesArray: any[] = [];
  constructor(private imageService: ImageserviceService) {
    this.visibleImagesArray = this.imageService.getImages();
   }

  ngOnInit() {
  }
  ngOnChanges() {
    this.visibleImagesArray = this.imageService.getImages();
  }

}
