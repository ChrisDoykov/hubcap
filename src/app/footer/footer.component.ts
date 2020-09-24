import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private deviceService: DeviceDetectorService
  ) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();
  email = "";
  consent = false;
  notificationConsent = false;
  notificationEmail = false;
  emailSent = false;
  emailFailed = false;

  ngOnInit(): void {}

  submitEmail() {
    if (
      this.email === "" ||
      this.email.trim() === "" ||
      !(document.getElementById("emailFooter") as HTMLInputElement).validity
        .valid
    ) {
      this.notificationEmail = true;
      return;
    } else {
      this.notificationEmail = false;
    }
    if (!this.consent) {
      this.notificationConsent = true;
      return;
    } else {
      this.notificationConsent = false;
    }

    const data = {
      email: this.email,
    };

    this.http
      .post<{ status: number; message: string }>("/subscribe", data)
      .subscribe(
        (response) => {
          document
            .getElementById("emailFooter")
            .setAttribute("disabled", "true");
          (document.getElementById(
            "emailFooter"
          ) as HTMLInputElement).placeholder = "Thank you!";
          this.emailSent = true;
          document.getElementById("btn-send").classList.add("is-primary");
          document.getElementById("btn-send").classList.remove("is-blue");
          document.getElementById("btn-send").setAttribute("disabled", "true");
        },
        (error) => {
          this.emailFailed = true;
          console.log(error.message);
        }
      );

    this.email = "";
  }
}
