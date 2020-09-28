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
  logoIsVisible;
  banner;
  sticky;
  navDrop;

  burgerELadded = false;
  dropDownsELadded = false;

  width: number;

  ngOnInit(): void {
    this.navbar = document.getElementsByTagName("app-navigation")[0];
    this.nav = document.getElementsByClassName("navbar")[0];
    this.navDrop = document.getElementById("navbarDropdown");
    this.banner = document.getElementsByClassName("banner-line")[0];
    this.header = document.getElementsByTagName("app-header")[0];
    this.sticky = this.nav.parentNode.offsetTop;
    this.onResize();
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    const $dropdowns = Array.prototype.slice.call(
      document.querySelectorAll(".has-dropdown"),
      0
    );

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd && this.width < 1025) {
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
  }

  onScroll() {
    if (window.pageYOffset >= this.sticky) {
      this.nav.classList.add("is-fixed-top");
      document
        .getElementsByTagName("html")[0]
        .classList.add("has-navbar-fixed-top");
      this.logoIsVisible = true;
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
  }

  onResize() {
    this.width = window.innerWidth;
    this.sticky = this.nav.parentNode.offsetTop;

    this.onScroll();

    const $links = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-link"),
      0
    );

    const $dropdowns = Array.prototype.slice.call(
      document.querySelectorAll(".has-dropdown"),
      0
    );
    if (this.width <= 1025) {
      $links.forEach((link, index) => {
        $dropdowns.forEach((dropdown) => {
          if (dropdown.classList.contains("is-hoverable"))
            dropdown.classList.remove("is-hoverable");
        });
        if (!this.dropDownsELadded) {
          link.addEventListener("click", () => {
            if (!$dropdowns[index].classList.contains("is-active")) {
              $dropdowns[index].classList.add("is-active");
            } else {
              $dropdowns[index].classList.remove("is-active");
            }
          });
        }
      });
      this.dropDownsELadded = true;

      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0 && !this.burgerELadded) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener("click", () => {
            this.burgerELadded = true;
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            if (el.classList.contains("is-active")) {
              el.classList.remove("is-active");
            } else {
              el.classList.add("is-active");
            }
            if ($target.classList.contains("is-active")) {
              $target.classList.remove("is-active");
            } else {
              $target.classList.add("is-active");
            }
          });
        });
      }
    } else {
      $links.forEach((link, index) => {
        $dropdowns.forEach((dropdown) => {
          if (!dropdown.classList.contains("is-hoverable"))
            dropdown.classList.add("is-hoverable");
        });

        const linkClone = link.cloneNode(true);

        link.parentNode.replaceChild(linkClone, link);
      });
      this.dropDownsELadded = false;
    }
  }
}
