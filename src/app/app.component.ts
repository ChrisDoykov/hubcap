import { Component, OnInit, HostListener } from "@angular/core";

import { SwiperOptions } from "swiper";

import { Router, NavigationEnd } from "@angular/router";

import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DeviceDetectorService],
})
export class AppComponent implements OnInit {
  title = "hubcap";

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router
  ) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  browser = this.deviceService.browser;

  width: number;

  browserList = ["Safari", "IE"];

  webp = true;

  images = [
    "../assets/res/images/grey_bg.webp",
    "../assets/res/images/grey_bg2.webp",
    "../assets/res/images/grey_bg3.webp",
    "../assets/res/images/grey_bg4.webp",
    "../assets/res/images/grey_bg5.webp",
  ];

  fallbackImages = [
    "../assets/res/images/grey_bg.jpg",
    "../assets/res/images/grey_bg2.jpg",
    "../assets/res/images/grey_bg3.jpg",
    "../assets/res/images/grey_bg4.jpg",
    "../assets/res/images/grey_bg5.jpg",
  ];

  imagesMobile = [
    "../assets/res/images/grey_bg.webp",
    "../assets/res/images/grey_bg2-small.webp",
    "../assets/res/images/grey_bg3-small.webp",
    "../assets/res/images/grey_bg4-small.webp",
    "../assets/res/images/grey_bg5-small.webp",
  ];

  fallbacksMobile = [
    "../assets/res/images/grey_bg.jpg",
    "../assets/res/images/grey_bg2-small.jpg",
    "../assets/res/images/grey_bg3-small.jpg",
    "../assets/res/images/grey_bg4-small.jpg",
    "../assets/res/images/grey_bg5-small.jpg",
  ];

  config: SwiperOptions = {
    speed: 2000,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: false,
    spaceBetween: 30,
  };

  ngOnInit() {
    this.webp = this.browserList.includes(this.browser) ? false : true;
    this.width = window.innerWidth;
  }

  onResize() {
    this.width = window.innerWidth;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
