import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  providers: [DeviceDetectorService],
})
export class NavigationComponent implements OnInit {
  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router
  ) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  firefox = this.deviceService.browser === "Firefox";
  chrome = this.deviceService.browser === "Chrome";
  edge = this.deviceService.browser === "MS-Edge-Chromium";

  browser = this.deviceService.browser;

  navbar;
  nav;
  header;
  stickyMobile;
  logoIsVisible;
  banner;
  stickyDesktop;
  navDrop;

  ngOnInit(): void {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }

    const $links = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-link"),
      0
    );

    const $dropdowns = Array.prototype.slice.call(
      document.querySelectorAll(".has-dropdown"),
      0
    );

    $links.forEach((link, index) => {
      if (!this.desktop) {
        $dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("is-hoverable");
        });
        link.addEventListener("click", () => {
          $dropdowns[index].classList.toggle("is-active");
        });
      }
    });

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd && (this.mobile || this.tablet)) {
        $navbarBurgers.forEach((el) => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.remove("is-active");
          $target.classList.remove("is-active");
          $dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("is-active");
          });
        });
        if (this.mobile) {
          window.scrollTo(0, 600);
        } else {
          window.scrollTo(0, 220);
        }
      } else {
        window.scrollTo(0, 220);
      }
    });

    this.navbar = document.getElementsByTagName("app-navigation")[0];
    this.nav = document.getElementsByClassName("navbar")[0];
    this.navDrop = document.getElementById("navbarDropdown");
    this.banner = document.getElementsByClassName("banner-line")[0];
    this.header = document.getElementsByTagName("app-header")[0];
    this.stickyMobile = this.nav.offsetTop;
    if (this.chrome) {
      if (this.desktop) {
        this.stickyDesktop = this.stickyMobile * 1.05;
      } else {
        this.stickyDesktop = this.stickyMobile * 1.05;
      }
    } else if (this.firefox) {
      this.stickyDesktop = this.stickyMobile * 1.32;
    } else {
      this.stickyDesktop = this.stickyMobile * 1.35;
    }

    if (this.desktop || this.tablet) {
      window.onscroll = () => {
        if (window.pageYOffset >= this.stickyDesktop) {
          this.nav.classList.add("is-fixed-top");
          document
            .getElementsByTagName("html")[0]
            .classList.add("has-navbar-fixed-top");
          this.logoIsVisible = true;
          // this.nav.style.backgroundColor = "white";
          // this.nav.style.borderBottom = "2px solid #0680C3";
        } else {
          this.nav.classList.remove("is-fixed-top");
          document
            .getElementsByTagName("html")[0]
            .classList.remove("has-navbar-fixed-top");
          this.logoIsVisible = false;
          this.nav.style.backgroundColor = "#FBA200";
          this.navDrop.style.backgroundColor = "#FBA200";
          this.nav.style.borderBottom = "none";
        }
      };
    } else {
      window.onscroll = () => {
        if (window.pageYOffset >= this.stickyMobile) {
          this.nav.classList.add("is-fixed-top");
          document
            .getElementsByTagName("html")[0]
            .classList.add("has-navbar-fixed-top");
          this.logoIsVisible = true;
          // this.nav.style.borderBottom = "2px solid #0680C3";
        } else {
          this.nav.classList.remove("is-fixed-top");
          document
            .getElementsByTagName("html")[0]
            .classList.remove("has-navbar-fixed-top");
          this.logoIsVisible = false;
          this.navDrop.style.backgroundColor = "#FBA200";
          this.nav.style.borderBottom = "none";
        }
      };
    }
  }
}
