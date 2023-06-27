import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatListOption, MatSelectionListChange } from "@angular/material/list";

interface TransferListItem {
  text: string;
  id: string;
}

@Component({
  selector: "lib-transfer-list",
  templateUrl: "./transfer-list.component.html",
  styleUrls: ["./transfer-list.component.scss"],
})
export class TransferListComponent {
  listDataA: TransferListItem[] = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" },
    { text: "Jaguar XJ220", id: "list-08" },
    { text: "McLaren P1", id: "list-09" },
    { text: "Ferrari LaFerrari", id: "list-10" },
  ];
  listDataB: TransferListItem[] = [
    { text: "Aston Martin One- 77", id: "list-07" },
  ];
  controlFirst = new FormControl();
  controlSecond = new FormControl();
  selectedA: TransferListItem[] = [];
  selectedB: TransferListItem[] = [];

  constructor() {}

  //Here, all list items are moved to the second list on clicking move all button
  moveAllToB() {
    this.listDataB = this.listDataB.concat(this.listDataA);
    this.listDataA = [];
    this.selectedA = [];
  }

  //Here, the selected list items are moved to the second list on clicking move button
  moveSelectedToB() {
    this.listDataB = this.listDataB.concat(this.selectedA);
    this.listDataA = this.listDataA.filter(
      (el) => !this.selectedA.includes(el)
    );
    this.selectedA = [];
  }

  //Here, the selected list items are moved to the first list on clicking move button
  moveSelectedToA() {
    this.listDataA = this.listDataA.concat(this.selectedB);
    this.listDataB = this.listDataB.filter(
      (el) => !this.selectedB.includes(el)
    );
    this.selectedB = [];
  }

  //Here, all list items are moved to the first list on clicking move all button
  moveAllToA() {
    this.listDataA = this.listDataA.concat(this.listDataB);
    this.listDataB = [];
    this.selectedB = [];
  }

  //Here, filtering is handled
  onKeyUpA(e: KeyboardEvent) {}

  //Here, filtering is handled
  onKeyUpB(e: KeyboardEvent) {}

  onGroupChangeA(options: MatListOption[]) {
    this.selectedA = options.map((o) => o.value);
  }

  onGroupChangeB(options: MatListOption[]) {
    this.selectedB = options.map((o) => o.value);
  }

  listFnA() {
    const filtered = this.controlFirst.value
      ? this.listDataA.filter((el) =>
          el.text
            .toLocaleLowerCase()
            .includes(this.controlFirst.value.toLocaleLowerCase())
        )
      : this.listDataA;
    const sorted = filtered.sort((a, b) =>
      a.text > b.text ? 1 : a.text === b.text ? 0 : -1
    );
    return sorted;
  }

  listFnB() {
    const filtered = this.controlSecond.value
      ? this.listDataB.filter((el) =>
          el.text
            .toLocaleLowerCase()
            .includes(this.controlSecond.value.toLocaleLowerCase())
        )
      : this.listDataB;
    const sorted = filtered.sort((a, b) =>
      a.text > b.text ? 1 : a.text === b.text ? 0 : -1
    );
    return sorted;
  }

  public trackById(index: number, item: TransferListItem) {
    return item.id;
  }
}
