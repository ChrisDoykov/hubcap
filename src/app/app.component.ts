import { Component, OnInit, HostListener } from "@angular/core";

import { SwiperOptions } from "swiper";

import { Router, NavigationEnd } from "@angular/router";

import { DeviceDetectorService } from "ngx-device-detector";
import { HttpClient } from "@angular/common/http";

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
    private router: Router,
    private http: HttpClient
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

  DIH = localStorage.getItem("DIH");
  dihList = [
    {
      name: "Austria",
      lat: 47.06973,
      lon: 15.43826,
    },
    {
      name: "Denmark",
      lat: 56.17449,
      lon: 10.21298,
    },
    {
      name: "Germany",
      lat: 48.248829,
      lon: 11.65112,
    },
    {
      name: "Sweden",
      lat: 59.35037,
      lon: 18.0735,
    },
    {
      name: "Italy",
      lat: 45.47289276123047,
      lon: 9.229923248291016,
    },
    {
      name: "Romania",
      lat: 46.1691535,
      lon: 24.4267997,
    },
    {
      name: "United Kingdom",
      lat: 54.9721975,
      lon: -1.6023193,
    },
  ];
  ngOnInit() {
    this.webp = this.browserList.includes(this.browser) ? false : true;
    this.width = window.innerWidth;

    if (!this.DIH) {
      this.http.get<{ ip: any }>("http://api.ipify.org/?format=json").subscribe(
        (res) => {
          this.http
            .get<{ country: string; lat: number; lon: number }>(
              `http://ip-api.com/json/${res.ip}`
            )
            .subscribe(
              (res) => {
                this.calculateClosest({ lat: res.lat, lon: res.lon });
              },
              (err) => {
                console.log(err);
              }
            );
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onResize() {
    this.width = window.innerWidth;
  }

  calculateClosest(coords) {
    const haversine = (
        { longitude: lonA, latitude: latA },
        { longitude: lonB, latitude: latB }
      ) => {
        const { PI, sin, cos, atan2 } = Math,
          r = PI / 180,
          R = 6371,
          deltaLat = (latB - latA) * r,
          deltaLon = (lonB - lonA) * r,
          a =
            sin(deltaLat / 2) ** 2 +
            cos(cos(latB * r) * latA * r) * sin(deltaLon / 2) ** 2,
          c = 2 * atan2(a ** 0.5, (1 - a) ** 0.5),
          d = R * c;
        return d;
      },
      currentLoc = { latitude: coords.lat, longitude: coords.lon },
      arr = this.dihList.map((dih) => {
        return { latitude: dih.lat, longitude: dih.lon };
      });
    let minDist = Number.MAX_VALUE;
    let closestCoords: { longitude: number; latitude: number } = {
      longitude: 0,
      latitude: 0,
    };

    arr.forEach((loc) => {
      let dist = haversine(
        { longitude: currentLoc.longitude, latitude: currentLoc.latitude },
        { longitude: loc.longitude, latitude: loc.latitude }
      );
      if (dist < minDist) {
        minDist = dist;
        closestCoords = loc;
      }
    });

    this.dihList.forEach((dih) => {
      if (
        dih.lat === closestCoords.latitude &&
        dih.lon === closestCoords.longitude
      ) {
        this.DIH = dih.name;
        localStorage.setItem("DIH", dih.name);
      }
    });

    // let { closest } = arr.reduce(
    //   (r, o) => {
    //     const distance = haversine(o, obj);
    //     distance < r.minDistance ||
    //       (!r.closest && ((r.closest = o), (r.minDistance = distance)));
    //     return r;
    //   },
    //   { closest: null, minDistance: null }
    // );

    // console.log(closest);
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
