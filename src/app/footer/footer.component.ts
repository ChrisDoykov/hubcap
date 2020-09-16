import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {}

  handleNewsletter(e) {
    e.preventDefault();
    // alert(e.target.elements.email.value);
    alert("Email newsletters coming soon! Thank you for your interest.");
    // console.log(e);
    // Pass to /subscribe
  }
}
