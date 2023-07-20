import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-people-say',
  templateUrl: './people-say.component.html',
  styleUrls: ['./people-say.component.css']
})
export class PeopleSayComponent {

  comments: any = [
    { "name": "Sarah David L1", "titel": " The team at the home garden landscaping service transformed my backyard into a stunning oasis. Their attention to detail and creativity exceeded my expectations. " },
    { "name": "Sarah David L2", "titel": " The team at the home garden landscaping service transformed my backyard into a stunning oasis. Their attention to detail and creativity exceeded my expectations. " },
    { "name": "Sarah David L3", "titel": " The team at the home garden landscaping service transformed my backyard into a stunning oasis. Their attention to detail and creativity exceeded my expectations. " }]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }
}
