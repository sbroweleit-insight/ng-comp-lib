import { Component } from "@angular/core";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent {
  leftItems = [
    { title: "Hennessey Venom" },
    { title: "Bugatti Chiron" },
    { title: "Bugatti Veyron Super Sport" },
    { title: "SSC Ultimate Aero" },
    { title: "Koenigsegg CCR" },
    { title: "McLaren F1" },
    { title: "Jaguar XJ220" },
    { title: "McLaren P1" },
    { title: "Ferrari LaFerrari" },
    { title: "Accord" },
    { title: "Pinto" },
    { title: "X5" },
    { title: "Z1" },
    { title: "Audi" },
  ];
  rightItems = [{ title: "Aston Martin One- 77" }];

  handleTransfer(_items: any) {
    // this.rightItems = items;
  }
}
