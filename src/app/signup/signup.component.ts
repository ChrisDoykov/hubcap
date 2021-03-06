import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  width: number;
  constructor(private router: Router, private http: HttpClient) {}

  @ViewChild("signupForm", { static: true }) signupForm: ElementRef;

  email: string;
  emailSent: boolean;
  emailFailed: boolean;

  ngOnInit(): void {
    document.title = "Newsletter Signup | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Newsletter Signup";
    }

    window.scrollTo(0, window.innerHeight / 2);
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Newsletter Signup";
    }
  }

  handleSub() {
    const data = {
      email: this.email,
    };

    this.http
      .post<{ status: number; message: string }>("/subscribe", data)
      .subscribe(
        (response) => {
          document
            .getElementById("emailSignup")
            .setAttribute("disabled", "true");
          (document.getElementById(
            "emailSignup"
          ) as HTMLInputElement).placeholder = "Thank you!";
          this.emailSent = true;
          document.getElementById("btn-send-form").classList.add("is-primary");
          document.getElementById("btn-send-form").classList.remove("is-blue");
          document
            .getElementById("btn-send-form")
            .setAttribute("disabled", "true");
          this.router.navigate(["/"]);
        },
        (error) => {
          this.emailFailed = true;
          console.log(error.message);
        }
      );

    this.email = "";
    localStorage.setItem("popup_dismissed", "1");
  }
}
