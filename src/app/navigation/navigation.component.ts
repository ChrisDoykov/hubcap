import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  providers: [DeviceDetectorService],
})
export class NavigationComponent implements OnInit {
  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private route: ActivatedRoute
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

  mobileMenu = false;

  width: number;

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.navbar = document.getElementsByTagName("app-navigation")[0];
    this.nav = document.querySelectorAll(".navbar")[0];
    this.navDrop = document.getElementById("navbarDropdown");
    this.banner = document.getElementsByClassName("banner-line")[0];
    this.header = document.getElementsByTagName("app-header")[0];
    this.sticky = this.nav.parentNode.offsetTop;
    this.onResize();
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
        if (
          document.location.href
            .toString()
            .toLowerCase()
            .includes("technologies") &&
          this.route.snapshot.fragment !== ""
        ) {
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        if (
          document.location.href
            .toString()
            .toLowerCase()
            .includes("technologies") &&
          this.route.snapshot.fragment !== ""
        ) {
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView({ block: "center" });
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

    if (this.width <= 600) {
      this.navbar = document.getElementsByTagName("app-navigation")[0];
      this.nav = document.querySelectorAll(".navbar")[0];
      this.navDrop = document.getElementById("navbarDropdown");
      this.banner = document.getElementsByClassName("banner-line")[0];
      this.header = document.getElementsByTagName("app-header")[0];
    }

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
      $dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-hoverable");
      });
      if (!this.mobileMenu) {
        $links.forEach((link, index) => {
          link.addEventListener("click", () => {
            $dropdowns[index].classList.toggle("is-active");
          });
        });
      }
      this.mobileMenu = true;
    } else {
      $links.forEach((link, index) => {
        // Make menu items hoverable
        $dropdowns.forEach((dropdown) => {
          dropdown.classList.add("is-hoverable");
        });

        // Remove all event listeners from the menu items
        let elClone = link.cloneNode(true);

        link.parentNode.replaceChild(elClone, link);
      });
      this.mobileMenu = false;
    }
  }

  blur(event) {
    (event.path[0] as HTMLElement).blur();
  }
}
