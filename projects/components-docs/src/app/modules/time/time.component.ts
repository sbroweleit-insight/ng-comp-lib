import { Component } from "@angular/core";

@Component({
  selector: "app-time",
  templateUrl: "./time.component.html",
  styleUrls: ["./time.component.scss"],
})
export class TimeComponent {
  date = new Date();
  min = new Date(2023, 4, 9, 5, 40);
  max = new Date(2023, 4, 9, 21, 15);
}
