import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from './../imageservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: any;
  constructor(private imageService: ImageserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    );
  }

}
