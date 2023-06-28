import { Component } from "@angular/core";
interface TransferItem {
  title: string;
  id: string;
}
@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent {
  leftItems: TransferItem[] = [
    { title: "Hennessey Venom", id: "list-01" },
    { title: "Bugatti Chiron", id: "list-02" },
    { title: "Bugatti Veyron Super Sport", id: "list-03" },
    { title: "SSC Ultimate Aero", id: "list-04" },
    { title: "Koenigsegg CCR", id: "list-05" },
    { title: "McLaren F1", id: "list-06" },
    { title: "Jaguar XJ220", id: "list-08" },
    { title: "McLaren P1", id: "list-09" },
    { title: "Ferrari LaFerrari", id: "list-10" },
  ];
  rightItems: TransferItem[] = [
    { title: "Aston Martin One- 77", id: "list-07" },
  ];

  handleTransfer(items: TransferItem[]) {
    // this.rightItems = items;
  }
}
