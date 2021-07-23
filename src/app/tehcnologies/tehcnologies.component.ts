import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Meta, Title } from "@angular/platform-browser";
import { TechnologyDialogComponent } from "../technology-dialog/technology-dialog.component";
import { models } from "./models";
import { tools } from "./tools";

@Component({
  selector: "app-tehcnologies",
  templateUrl: "./tehcnologies.component.html",
  styleUrls: ["./tehcnologies.component.scss"],
})
export class TehcnologiesComponent implements OnInit, OnDestroy {
  constructor(
    private meta: Meta,
    private title: Title,
    private dialog: MatDialog
  ) {}

  width: number;
  windowHeight: any;
  elements_fade_in: any;

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

  models = models;
  tools = tools;

  technologies = [...this.tools, ...this.models];

  showingAll = true;
  rearranged = false;
  scrolled = false;
  noResults = false;

  whitespace: RegExp = /\s/g;

  ngOnInit(): void {
    this.title.setTitle("Technologies | HUBCAP");
    this.meta.updateTag({
      property: "og:description",
      content:
        "HUBCAP's collaboration platform gives its users access to a wide variety of different MBD tools and assets. See a detailed list below.",
    });
    this.meta.addTag({
      name: "description",
      content:
        "HUBCAP's collaboration platform gives its users access to a wide variety of different MBD tools and assets. See a detailed list below.",
    });

    this.rearrangeTechnologies(this.technologies);

    this.onResize();
    this.checkPosition();

    const url = document.location.href.toString().toLowerCase();

    this.technologies.forEach((tech) => {
      let name = tech.asset_name.toLowerCase().replace(this.whitespace, "-");
      if (url.includes(name)) {
        this.openDialog(tech);
      }
    });
  }

  ngOnDestroy(): void {
    this.meta.updateTag({
      property: "og:description",
      content:
        "Join us in the Cyber-Physical Systems revolution! HUBCAP is your one-stop-shop for embracing digital innovation using model-based design technology for Cyber-Physical Systems.",
    });
    this.meta.updateTag({
      name: "description",
      content:
        "Join us in the Cyber-Physical Systems revolution! HUBCAP is your one-stop-shop for embracing digital innovation using model-based design technology for Cyber-Physical Systems.",
    });
  }

  openDialog(asset) {
    this.dialog.open(TechnologyDialogComponent, {
      data: { asset },
      panelClass: "technology-popup",
    });
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView({ block: "center" });
  }

  rearrangeTechnologies(technologies) {
    this.letters.forEach((letter) => {
      this.alphabet[letter] = [];
    });
    for (let tech of technologies) {
      this.alphabet[tech.asset_name.toLowerCase().charAt(0)].push(tech);
    }
    this.rearranged = true;
  }

  filterAndInsert(event) {
    let technologies = [];

    if (event.target.name === "technologiesRadio") {
      if (event.target.id === "modelsR") {
        technologies = this.technologies.filter(
          (tech) => tech.type === "model"
        );

        this.rearrangeTechnologies(technologies);
      } else if (event.target.id === "toolsR") {
        technologies = this.technologies.filter((tech) => tech.type === "tool");

        this.rearrangeTechnologies(technologies);
      } else if (event.target.id === "smeR") {
        technologies = this.technologies.filter((tech) => !tech.dihAsset);

        this.rearrangeTechnologies(technologies);
      }
    } else if (event.target.name === "all") {
      if (event.target.checked === true) {
        this.rearrangeTechnologies(this.technologies);
      } else {
        const toolsRadio = document.getElementById(
          "toolsR"
        ) as HTMLInputElement;

        toolsRadio.checked = true;

        const event = {
          target: {
            name: "technologiesRadio",
            id: "toolsR",
          },
        };

        this.filterAndInsert(event);
      }
    }
  }

  handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    let allAssets = [...this.technologies];
    let filteredAssets = [];

    allAssets.forEach((asset) => {
      if (asset.asset_name.toLowerCase().includes(searchTerm)) {
        filteredAssets.push(asset);
      } else {
        if (
          asset["domain"] &&
          asset["domain"].toLowerCase().includes(searchTerm)
        ) {
          filteredAssets.push(asset);
        } else {
          if (asset.domains) {
            asset.domains.forEach((dom) => {
              if (
                dom.toLowerCase().includes(searchTerm) &&
                !filteredAssets.includes(asset)
              ) {
                filteredAssets.push(asset);
              }
            });
          }
        }
      }
    });

    this.rearrangeTechnologies(filteredAssets);

    if (filteredAssets.length <= 0) {
      this.noResults = true;
    } else {
      this.noResults = false;
    }
  }

  onResize() {
    this.width = window.innerWidth;
    this.windowHeight = window.innerHeight;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
  }

  checkPosition() {
    if (this.elements_fade_in.length <= 0) {
      this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    }
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop =
        this.elements_fade_in[i].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }
  }
}
