import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  width: number;
  constructor() {}

  items_all = [
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

    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Funding.jpg",
      modalTarget: "call-2.1-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Join.jpg",
      modalTarget: "call-2.1-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Tools.jpg",
      modalTarget: "call-2.1-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Funding.jpg",
      modalTarget: "call-2.1-social-4",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Join.jpg",
      modalTarget: "call-2.1-social-5",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Tools.jpg",
      modalTarget: "call-2.1-social-6",
    },

    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_1.jpg",
      modalTarget: "call-3-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_2.jpg",
      modalTarget: "call-3-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_3.jpg",
      modalTarget: "call-3-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_4.jpg",
      modalTarget: "call-3-social-4",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_5.jpg",
      modalTarget: "call-3-social-5",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_6.jpg",
      modalTarget: "call-3-social-6",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_1.jpg",
      modalTarget: "call-1.3-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_2.jpg",
      modalTarget: "call-1.3-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_3.jpg",
      modalTarget: "call-1.3-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_4.jpg",
      modalTarget: "call-1.3-social-4",
    },
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

  items_1_1 = [
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
  ];

  items_1_2 = [
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
  items_1_3 = [
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_1.jpg",
      modalTarget: "call-1.3-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_2.jpg",
      modalTarget: "call-1.3-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_3.jpg",
      modalTarget: "call-1.3-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC1-3PULL/HUBCAP_SOCIAL_1-3_PULL_4.jpg",
      modalTarget: "call-1.3-social-4",
    },
  ];

  items_2_1 = [
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Funding.jpg",
      modalTarget: "call-2.1-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Join.jpg",
      modalTarget: "call-2.1-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Rectangle_Tools.jpg",
      modalTarget: "call-2.1-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Funding.jpg",
      modalTarget: "call-2.1-social-4",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Join.jpg",
      modalTarget: "call-2.1-social-5",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC2-1EXPERIMENT/HUBCAP_2-1_EXPERIMENT_Square_Tools.jpg",
      modalTarget: "call-2.1-social-6",
    },
  ];
  items_3 = [
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_1.jpg",
      modalTarget: "call-3-social-1",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_2.jpg",
      modalTarget: "call-3-social-2",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_3.jpg",
      modalTarget: "call-3-social-3",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_4.jpg",
      modalTarget: "call-3-social-4",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_5.jpg",
      modalTarget: "call-3-social-5",
    },
    {
      imageUrl:
        "../../assets/res/files/HUBCAP_OC3INNOVATE/HUBCAP_SOCIAL_3_INNOVATE_6.jpg",
      modalTarget: "call-3-social-6",
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
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Useful Resources";
    }

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

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Useful Resources";
    }
  }
}
