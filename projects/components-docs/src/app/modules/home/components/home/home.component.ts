import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-docs-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  date = new Date();
  min = new Date(2023, 4, 9, 5, 40);
  max = new Date(2023, 4, 9, 21, 15);

  leftItems = ["ITEM 009", "ITEM 008", "ITEM 007"];
  rightItems = ["ITEM 003"];
  handleTransfer(items: string[]) {
    // console.log("Items transferred:", items);
  }

  ngOnInit() {}
}
