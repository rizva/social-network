import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ImageService } from '../../services/image.service'; 

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css']
})
export class SingleImageComponent implements OnInit {

  image:any

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}
