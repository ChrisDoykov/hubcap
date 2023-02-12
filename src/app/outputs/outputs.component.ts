import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { deliverables } from "./deliverables";
import { papers } from "./papers";

@Component({
  selector: "app-outputs",
  templateUrl: "./outputs.component.html",
  styleUrls: ["./outputs.component.scss"],
})
export class OutputsComponent implements OnInit {
  width: number;
  constructor() {}

  deliverables = deliverables;
  papers = papers;
  newsletters = [

    {
      month: "December 2022",
      description: `Find out the latest updates in HUBCAP, learn about the outcomes of our latest call in the final edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Dec_2022.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N9_thumb.png",
      thumbnailAlt: "December 2022 Newsletter Front Page",
      modalTarget: "N9",
    },
    {
      month: "November 2022",
      description: `Find out the latest updates in HUBCAP, learn about the outcomes of our third INNOVATE call in our November 2022 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Nov_2022.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N8_thumb.png",
      thumbnailAlt: "November 2022 Newsletter Front Page",
      modalTarget: "N8",
    },
    {
      month: "October 2022",
      description: `Find out the latest updates in HUBCAP, learn about the outcomes of our second EXPERIMENT call in our October 2022 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Oct_2022.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N7_thumb.png",
      thumbnailAlt: "October 2022 Newsletter Front Page",
      modalTarget: "N7",
    },
    {
      month: "June 2022",
      description: `Find out the latest updates in HUBCAP, learn about the outcomes of our first EXPERIMENT call and find out more on how to apply to Call #1.5 in our June 2022 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_June_2022.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N6_thumb.png",
      thumbnailAlt: "June 2022 Newsletter Front Page",
      modalTarget: "N6",
    },
    {
      month: "March 2022",
      description: `Find out the latest updates in HUBCAP, learn about the outcomes of our first EXPERIMENT call and find out how to become a HUBCAP DIH in our March 2022 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Mar_2022.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N5_thumb.png",
      thumbnailAlt: "March 2022 Newsletter Front Page",
      modalTarget: "N5",
    },
    {
      month: "October 2021",
      description: `Find out the latest updates in the HUBCAP project, learn about the winners of the INNOVATE open call, find out more about our Call #2.2 EXPERIMENT and more in the October 2021 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Oct_2021.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N4_thumb.png",
      thumbnailAlt: "October 2021 Newsletter Front Page",
      modalTarget: "N4",
    },
    {
      month: "June 2021",
      description: `Find out the latest updates in the HUBCAP project, learn about how you can benefit from our INNOVATE open call, find out more about our Call #2.1 EXPERIMENT winners and more in the June 2021 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_June_2021.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N3_thumb.png",
      thumbnailAlt: "June 2021 Newsletter Front Page",
      modalTarget: "N3",
    },
    {
      month: "April 2021",
      description: `Find out the latest updates in the HUBCAP project, learn about how you can benefit from our PULL and INNOVATE open calls and more in the April 2021 edition of our newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_April_2021.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N2_thumb.png",
      thumbnailAlt: "April 2021 Newsletter Front Page",
      modalTarget: "N2",
    },
    {
      month: "December 2020",
      description: `Find out what's new throughout the project, learn about new business opportunities, technological advances and more in our December 2020 newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Dec_2020.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N1_thumb.png",
      thumbnailAlt: "December 2020 Newsletter Front Page",
      modalTarget: "N1",
    },
  ];

  ngOnInit(): void {
    document.title = "Project Outputs | HUBCAP";
    this.onResize();
  }

  onResize() {
    this.width = window.innerWidth;
  }
  openModal(newsletter) {
    const target = newsletter.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(newsletter) {
    const target = newsletter.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }
}
