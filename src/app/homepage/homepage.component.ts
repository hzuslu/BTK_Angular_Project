import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    $(document).ready(() => {
      $('.slider').bxSlider({
        auto: true,
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: $('.img-content').width(),
        slideMargin: 10,
        moveSlides: 1,
        autoHover: true,
        pause: 3000,
        pager: false,
        controls: false,
      });
    });
  }

}
