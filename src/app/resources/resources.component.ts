import { Component, OnInit } from "@angular/core";
import { items_3 } from "./resources_innovate";
import { items_2_2, items_2_1 } from "./resources_experiment";
import {
  items_1_1,
  items_1_2,
  items_1_3,
  items_1_4,
  items_1_5,
} from "./resources_pull";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  width: number;
  constructor() {}

  // Media Kit Resources (flyers, socials, etc.)

  items_all = [
    ...items_1_1,
    ...items_1_2,
    ...items_1_3,
    ...items_1_4,
    ...items_1_5,
    ...items_2_1,
    ...items_2_2,
    ...items_3,
  ];

  items_OC = [
    {
      imageUrl: "../../assets/res/images/HUBCAP_OpenCalls_Social01.png",
      modalTarget: "social-1",
    },
    {
      imageUrl: "../../assets/res/images/HUBCAP_OpenCalls_Social02.png",
      modalTarget: "social-2",
    },
  ];

  items_1_1 = items_1_1;
  items_1_2 = items_1_2;
  items_1_3 = items_1_3;
  items_1_4 = items_1_4;
  items_1_5 = items_1_5;
  items_2_1 = items_2_1;
  items_2_2 = items_2_2;
  items_3 = items_3;

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

    /* For making links work
     * If user has followed a URL which contains
     * a resource for a call - analyze the URL
     * and simulate a click on the "Download"
     * button for that resource.
     */

    const url = window.location.href.toString();

    // General
    if (url.includes("HUBCAP_OPENCALLS")) {
      document.getElementById("OCflyer").click();
    } else if (url.includes("SMEDeclaration")) {
      document.getElementById("SMEdec").click();
    } else if (url.includes("DeclarationHonour")) {
      document.getElementById("Hdec").click();
    }

    // Call #1.1
    else if (url.includes("HUBCAP_CALL1-1_PULL")) {
      document.getElementById("flyer1.1").click();
    } else if (url.includes("DocumentationKit-1-1")) {
      document.getElementById("Dkit").click();
    } else if (url.includes("press-release#1.1")) {
      document.getElementById("pr#1.1").click();
    }

    // Call #1.2
    else if (url.includes("DocumentationKit-1-2")) {
      document.getElementById("Dkit1-2").click();
    } else if (url.includes("press-release#1.2")) {
      document.getElementById("pr#1.2").click();
    } else if (url.includes("HUBCAP_CALL1-2_PULL")) {
      document.getElementById("flyer1.2").click();
    }

    // Call #1.3
    else if (url.includes("DocumentationKit-1-3")) {
      document.getElementById("Dkit1-3").click();
    } else if (url.includes("Annexes1-3")) {
      document.getElementById("Annexes1-3").click();
    } else if (url.includes("press-release#1.3")) {
      document.getElementById("pr#1.3").click();
    } else if (url.includes("HUBCAP_CALL1-3_PULL")) {
      document.getElementById("flyer1.3").click();
    }

    // Call #1.4
    // else if (url.includes("DocumentationKit-1-4")) {
    //   document.getElementById("Dkit1-4").click();
    // } else if (url.includes("Annexes1-4")) {
    //   document.getElementById("Annexes1-4").click();
    // } else if (url.includes("press-release#1.4")) {
    //   document.getElementById("pr#1.4").click();
    // } else if (url.includes("HUBCAP_CALL1-4_PULL")) {
    //   document.getElementById("flyer1.4").click();
    // }

    // Call #1.5
    // else if (url.includes("DocumentationKit-1-5")) {
    //   document.getElementById("Dkit1-5").click();
    // } else if (url.includes("Annexes1-5")) {
    //   document.getElementById("Annexes1-5").click();
    // } else if (url.includes("press-release#1.5")) {
    //   document.getElementById("pr#1.5").click();
    // } else if (url.includes("HUBCAP_CALL1-5_PULL")) {
    //   document.getElementById("flyer1.5").click();
    // }

    // Call #2.1
    else if (url.includes("DocumentationKit-2-1")) {
      document.getElementById("Dkit2-1").click();
    } else if (url.includes("press-release#2.1")) {
      document.getElementById("pr#2.1").click();
    } else if (url.includes("flyer2-1")) {
      document.getElementById("flyer2.1").click();
    }

    // Call #2.2
    // else if (url.includes("DocumentationKit-2-2")) {
    //   document.getElementById("Dkit2-2").click();
    // } else if (url.includes("press-release#2.2")) {
    //   document.getElementById("pr#2.2").click();
    // } else if (url.includes("HUBCAP_CALL2-2_EXPERIMENT")) {
    //   document.getElementById("flyer2.2").click();
    // }

    // Call #3
    else if (url.includes("DocumentationKit-3")) {
      document.getElementById("Dkit3").click();
    } else if (url.includes("press-release#3")) {
      document.getElementById("pr#3").click();
    } else if (url.includes("HUBCAP_CALL3_INNOVATE")) {
      document.getElementById("flyer3").click();
    } else if (url.includes("Annexes3")) {
      document.getElementById("Annexes3").click();
    }
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
