import { Component, OnChanges } from '@angular/core';
//import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  images:any[];
  
  allImages:any[] = [];

  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}
