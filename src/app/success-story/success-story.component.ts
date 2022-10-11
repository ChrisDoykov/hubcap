import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { stories } from "../success-stories-list/success-stories";

@Component({
  selector: "app-success-story",
  templateUrl: "./success-story.component.html",
  styleUrls: ["./success-story.component.scss"],
})
export class SuccessStoryComponent implements OnInit {
  constructor(private router: Router) {}

  stories = stories;

  // Story skeleton (used before the story data comes in)
  story = {
    title: "",
    subtitle: "",
    image: "",
    quote: "",
    quoteAttribution: "",
    sections: [
      {
        sectionHeading: "",
        paragraphs: [""],
      },
    ],
    urlName: "",
    info: {
      endUsers: [{ name: "", website: "" }],
      techProviders: [{ name: "", website: "" }],
      dih: { name: "", website: "" },
      domains: [""],
      impact: [""],
    },
    tryItNowUrl: "",
    videoUrl: ""    
  };

  ngOnInit(): void {
    const url = window.location.href.toString();
    var found = false;
    this.stories.forEach((story) => {
      if (url.includes(story.urlName)) {
        found = true;
        this.story = story;
        document.title = `${story.title} | Success Stories | HUBCAP`;
      } 
    });
    if(!found) {
      this.router.navigate(["/not-found"]);
    }
  }

  openModal(story) {
    const target = story.title;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(story) {
    const target = story.title;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }

  tryItNow() {
    window.open(this.story.tryItNowUrl, "_blank");
  }
}
