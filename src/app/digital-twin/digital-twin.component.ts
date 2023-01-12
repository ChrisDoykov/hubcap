import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwiperOptions } from "swiper";
//import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: "app-digital-twin",
  templateUrl: "./digital-twin.component.html",
  styleUrls: ["./digital-twin.component.scss"],
})

export class DigitalTwinComponent implements OnInit {
  constructor(private router: Router) {}

  config: SwiperOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 30,
    initialSlide: 0,
  };
  slides = [
    {
      imageURL: "../../assets/res/images/HUBCAP_PULL.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_PULL.jpg",
      heading: "Grow your organisation’s Digital Twin Capability",
      lines: [
        "As products and systems become contain ever more digital technology,",
        "our ability to gather data from them grows, and Digital Twins are ",
        "attracting massive interest as a way of leveraging this opportunity.",
        "But what is a Digital Twin? ",
        "Can your business benefit from this technology, and what is the route to doing so?",
      ],
    },
    {
      imageURL: "../../assets/res/images/HUBCAP_EXPERIMENT.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_EXPERIMENT.jpg",
      heading: "Grow your organisation’s Digital Twin Capability",
      lines: [
        "A Digital Twin is a virtual representation of a product or system. Unlike a “write once” design model, " +
        "however, a Digital twin is kept up to date with information about the real system’s state, using data " +
        "gathered from sensors and other sources. This synchrony between the virtual and the real world means " +
        "that the twin can be used to identify potential failures and defects, do predictive “what-if” analysis " +
        "on possible future changes, and even improve the real system’s performance directly.",
      ],
    },
    {
      imageURL: "../../assets/res/images/HUBCAP_INNOVATE.webp",
      backupImageURL: "../../assets/res/images/HUBCAP_INNOVATE.jpg",
      heading: "Grow your organisation’s Digital Twin Capability",
      lines: [
        "The Digital Twin Accelerator is a service that helps you access the expertise of four international " +
        "Digital Innovation Hubs and their networks of hundreds of specialists to demystify Digital Twin technology. " +
        "We can help you learn the basics of Digital Twins through short briefings for business leaders; explore the" +
        " opportunities for your business to develop the knowledge and skills you need to understand the " +
        "opportunities and barriers to exploiting Digital Twin technology in your sector; and to help you apply that " +
        "knowledge and skill to exploit the models and data that you have available to provide real engineering " +
        "insight. Our goal is to equip you to make informed decisions about how to develop and maintain DTs that " +
        "give you the value that you expect.",
      ],
    },
  ];
  applyToCall(id) {
    switch (id) {
      case 0:
        // window.location.href = "/calls/pull";
        this.router.navigate(["/calls/pull"]);
        break;
      case 1:
        // window.location.href = "/calls/experiment";
        this.router.navigate(["/calls/experiment"]);
        break;
      case 2:
        // window.location.href = "/calls/innovate";
        this.router.navigate(["/calls/innovate"]);
        break;
    }
  }

  ngOnInit(): void {
    document.title = "Digital Twin | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Digital Twin";
    }
  }
}
