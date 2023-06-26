import { Component } from "@angular/core";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent {
  subSections = [
    {
      icon: "info",
      label: "Overview",
      route: "overview",
    },
    {
      icon: "tips_and_updates",
      label: "Request Updates",
      route: "request-updates",
    },
  ];
}
