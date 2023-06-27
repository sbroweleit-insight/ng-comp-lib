import { Component } from "@angular/core";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent {
  subSections = [
    {
      label: "Time Picker",
      route: "overview",
    },
    {
      label: "Transfer list",
      route: "transfer-list",
    },
  ];
}
