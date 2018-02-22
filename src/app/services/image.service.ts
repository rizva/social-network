import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  allImages = [];

    getImages(){
        return this.allImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}
const IMAGES =[
  {"id":1, "description": "City View", "url":"assets/img/1.jpg"},
  {"id":2, "description": "Perucac lake", "url":"assets/img/2.jpg"},
  {"id":3, "description": "From the balcony", "url":"assets/img/3.jpg"},
  {"id":4, "description": "Perucac lake", "url":"assets/img/4.jpg"},
  {"id":5, "description": "Perucac lake", "url":"assets/img/5.jpg"},
  {"id":6, "description": "Perucac lake", "url":"assets/img/6.jpg"},
  {"id":7, "description": "Perucac lake", "url":"assets/img/7.jpg"},
  {"id":8, "description": "8th of March", "url":"assets/img/8.jpg"},
  {"id":9, "description": "Social Life", "url":"assets/img/9.jpg"},
  {"id":10, "description": "Social life", "url":"assets/img/10.jpg"},
  {"id":11, "description": "RIP", "url":"assets/img/11.jpg"},
  {"id":12, "description": "RIP", "url":"assets/img/12.jpg"},
  {"id":13, "description": "Sister wedding", "url":"assets/img/13.jpg"},
  {"id":14, "description": "Just me", "url":"assets/img/14.jpg"},
  {"id":15, "description": "Just Me", "url":"assets/img/15.jpg"},
  {"id":17, "description": "Just Me", "url":"assets/img/16.jpg"}
]

