import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tehcnologies",
  templateUrl: "./tehcnologies.component.html",
  styleUrls: ["./tehcnologies.component.scss"],
})
export class TehcnologiesComponent implements OnInit {
  constructor() {}

  width: number;
  elements_fade_in: any;
  elements_slide_in_left: any;
  elements_slide_in_right: any;
  windowHeight: any;

  letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  alphabet = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };

  technologies = [
    {
      type: "model",
      logo: "../../assets/res/images/au/csm_Edison_JR_0939_6bb3281da6.jpg",
      asset_name: "Asset Name",
      company_name: "Company Name",
      url: "https://www.example.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus ex deserunt, est numquam, aliquam a qui nesciunt quaerat magnam molestias asperiores accusamus quas sequi inventore! Quod temporibus iure rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi eos perspiciatis amet, est, nemo illum mollitia minima omnis dolorum unde sunt dolores error dolore placeat iusto aut! Qui, excepturi illo!",
      domain: "Model domain",
      modelling_lang_tool: "Modelling language/tool",
      license_info_url: "license-info.com",
      download_link: "https://thepirate-bay.org/1/",
      contact_url: "example.com/contact",
    },
    {
      type: "tool",
      logo: "../../assets/res/logos/into_cps_example_logo.png",
      asset_name: "INTO-CPS",
      company_name: "INTO-CPS",
      url: "https://into-cps.org/",
      description:
        'An integrated "tool chain" for comprehensive Model-Based Design (MBD) of Cyber-Physical Systems (CPSs). The tool chain supports the multidisciplinary, collaborative modelling of CPSs from requirements, through design, down to realisation in hardware and software. This enables traceability at all stages of the development. The IP from this project has been transferred to the INTO-CPS Association after the completion of the project.',
      supported_platforms: ["Plat 1,", "Plat 2,", "Plat 3,"],
      modelling_notations: ["Notation 1,", "Notation 2,", "Notation 3,"],
      related_tools: [
        {
          name: "Tool 1",
          url: "tool1.com",
        },
        {
          name: "Tool 2",
          url: "tool2.com",
        },
      ],
      domains: [
        "Applicable domain 1,",
        "Applicable domain 2,",
        "Applicable domain 3",
      ],
      license_info_name: "INTO-CPS Association Public License",
      license_info_url:
        "https://github.com/INTO-CPS-Association/maestro/blob/development/LICENSE",
      download_link: "https://into-cps-association.github.io/download/",
      email: "into-cps@mail.com",
    },
  ];

  ngOnInit(): void {
    document.title = "Technologies | HUBCAP";
    document.getElementById("hero-title").textContent = "Technologies";

    for (let tech of this.technologies) {
      this.alphabet[tech.asset_name.toLowerCase().charAt(0)].push(tech);
    }

    this.onResize();
    this.checkPosition();
  }

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.elements_slide_in_left = document.querySelectorAll(
      ".hidden-slide-in-left"
    );
    this.elements_slide_in_right = document.querySelectorAll(
      ".hidden-slide-in-right"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop = this.elements_fade_in[i].getBoundingClientRect()
        .top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }

    // Slide-in-Left
    for (let i = 0; i < this.elements_slide_in_left.length; i++) {
      let element = this.elements_slide_in_left[i];
      let positionFromTop = this.elements_slide_in_left[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-left");
        element.classList.remove("hidden-slide-in-left");
      }
    }

    // Slide-in-Right
    for (let i = 0; i < this.elements_slide_in_right.length; i++) {
      let element = this.elements_slide_in_right[i];
      let positionFromTop = this.elements_slide_in_right[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-right");
        element.classList.remove("hidden-slide-in-right");
      }
    }
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView();
  }
}
