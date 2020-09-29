import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  constructor() {}

  items = [
    {
      imageUrl: "../../assets/res/images/HUBCAP_OpenCalls_Social01.png",
      modalTarget: "social-1",
    },
    {
      imageUrl: "../../assets/res/images/HUBCAP_OpenCalls_Social02.png",
      modalTarget: "social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-1PULL/HUBCAP_Call1-1Pull_Social01.png",
      modalTarget: "call-1-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-1PULL/HUBCAP_Call1-1Pull_Social02.png",
      modalTarget: "call-1-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-1PULL/HUBCAP_Call1-1Pull_Social03.png",
      modalTarget: "call-1-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-1PULL/HUBCAP_Call1-1Pull_Social04.png",
      modalTarget: "call-1-social-4",
    },

    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-2PULL/HUBCAP_SOCIAL_12_02.png",
      modalTarget: "call-1.2-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-2PULL/HUBCAP_SOCIAL_12_03.png",
      modalTarget: "call-1.2-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-2PULL/HUBCAP_TWITER_12_01.png",
      modalTarget: "call-1.2-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-2PULL/HUBCAP_TWITER_12_02.png",
      modalTarget: "call-1.2-social-4",
    },
  ];

  openModal(item) {
    const target = item.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(item) {
    const target = item.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }

  ngOnInit(): void {
    document.title = "Useful Resources | HUBCAP";
    document.getElementById("hero-title").textContent = "Useful Resources";
    const url = window.location.href.toString();
    if (url.includes("HUBCAP_CALL1-1_PULL")) {
      document.getElementById("flyer1.1").click();
    } else if (url.includes("HUBCAP_OPENCALLS")) {
      document.getElementById("OCflyer").click();
    } else if (url.includes("SMEDeclaration")) {
      document.getElementById("SMEdec").click();
    } else if (url.includes("DeclarationHonour")) {
      document.getElementById("Hdec").click();
    } else if (url.includes("DocumentationKit-1-1")) {
      document.getElementById("Dkit").click();
    } else if (url.includes("DocumentationKit-1-2")) {
      document.getElementById("Dkit1-2").click();
    } else if (url.includes("press-release#1.1")) {
      document.getElementById("pr#1.1").click();
    } else if (url.includes("press-release#1.2")) {
      document.getElementById("pr#1.2").click();
    } else if (url.includes("HUBCAP_CALL1-2_PULL")) {
      document.getElementById("flyer1.2").click();
    }
  }
}
