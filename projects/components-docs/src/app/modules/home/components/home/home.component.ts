import { Component } from "@angular/core";

@Component({
  selector: "app-docs-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  leftItems = ["9", "8", "7"];
  rightItems = ["3"];
  handleTransfer(items: string[]) {
    console.log("Items transferred:", items);
  }
}
