import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";

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
  email: string;
  emailSent: boolean;
  emailFailed: boolean;

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

  @ViewChild("popup", { static: true }) popup: ElementRef;
  popupShown: boolean = true;
  popupDismiss: number = 0;

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
    
    this.popupDismiss = localStorage.getItem("popup_dismissed")
      ? Number.parseInt(localStorage.getItem("popup_dismissed"))
      : 0;

    setTimeout(() => {
      if (this.popupDismiss !== 1 && !window.location.href.includes("signup")) {
        this.popup.nativeElement.classList.remove("popup-newsletter--hidden");
        this.popup.nativeElement.classList.add("popup-newsletter--shown");
      }
    }, 6000);

    

    // REMOVE AFTER FINISHED POPUP
    // this.popupDismiss = 0;
    // this.popup.nativeElement.classList.remove("popup-newsletter--hidden");
    // this.popup.nativeElement.classList.add("popup-newsletter--shown");
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  closePopup() {
    // this.popupShown = true;
    this.popup.nativeElement.classList.remove("popup-newsletter--shown");
    this.popup.nativeElement.classList.add("popup-newsletter--hidden");
    localStorage.setItem("popup_dismissed", "1");
  }

  handleSub() {
    const data = {
      email: this.email,
    };

    this.http
      .post<{ status: number; message: string }>("/subscribe", data)
      .subscribe(
        (response) => {
          document
            .getElementById("emailPopup")
            .setAttribute("disabled", "true");
          (document.getElementById(
            "emailPopup"
          ) as HTMLInputElement).placeholder = "Thank you!";
          this.emailSent = true;
          document.getElementById("btn-send").classList.add("is-primary");
          document.getElementById("btn-send").classList.remove("is-blue");
          document.getElementById("btn-send").setAttribute("disabled", "true");
        },
        (error) => {
          this.emailFailed = true;
          console.log(error.message);
        }
      );

    this.email = "";
    setTimeout(() => {
      this.popup.nativeElement.classList.remove("popup-newsletter--shown");
      this.popup.nativeElement.classList.add("popup-newsletter--hidden");
      localStorage.setItem("popup_dismissed", "1");
    }, 2000);
  }
}
