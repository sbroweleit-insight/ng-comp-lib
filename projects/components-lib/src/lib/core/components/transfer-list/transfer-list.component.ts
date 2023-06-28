import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatListOption } from "@angular/material/list";

interface TransferItem {
  title: string;
  id: string;
}

@Component({
  selector: "lib-transfer-list",
  templateUrl: "./transfer-list.component.html",
  styleUrls: ["./transfer-list.component.scss"],
})
export class TransferListComponent {
  @Input() listDataA: TransferItem[] = [];
  @Input() listDataB: TransferItem[] = [];
  @Output() selectChange = new EventEmitter();
  selectedA: TransferItem[] = [];
  selectedB: TransferItem[] = [];
  filterA = "";
  filterB = "";

  constructor() {}

  //Here, all list items are moved to the second list on clicking move all button
  moveAllToB() {
    this.listDataB = this.listDataB.concat(this.listDataA);
    this.listDataA = [];
    this.selectedA = [];
    this.emitListB();
  }

  //Here, the selected list items are moved to the second list on clicking move button
  moveSelectedToB() {
    this.listDataB = this.listDataB.concat(this.selectedA);
    this.listDataA = this.listDataA.filter(
      (el) => !this.selectedA.includes(el)
    );
    this.selectedA = [];
    this.emitListB();
  }

  //Here, the selected list items are moved to the first list on clicking move button
  moveSelectedToA() {
    this.listDataA = this.listDataA.concat(this.selectedB);
    this.listDataB = this.listDataB.filter(
      (el) => !this.selectedB.includes(el)
    );
    this.selectedB = [];
    this.emitListB();
  }

  //Here, all list items are moved to the first list on clicking move all button
  moveAllToA() {
    this.listDataA = this.listDataA.concat(this.listDataB);
    this.listDataB = [];
    this.selectedB = [];
    this.emitListB();
  }

  emitListB() {
    this.selectChange.emit(this.listDataB);
  }

  onGroupChangeA(options: MatListOption[]) {
    this.selectedA = options.map((o) => o.value);
  }

  onGroupChangeB(options: MatListOption[]) {
    this.selectedB = options.map((o) => o.value);
  }

  listFnA() {
    const filtered = this.filterA
      ? this.listDataA.filter((el) =>
          el.title
            .toLocaleLowerCase()
            .includes(this.filterA.toLocaleLowerCase())
        )
      : this.listDataA;
    const sorted = filtered.sort((a, b) =>
      a.title > b.title ? 1 : a.title === b.title ? 0 : -1
    );
    return sorted;
  }

  listFnB() {
    const filtered = this.filterB
      ? this.listDataB.filter((el) =>
          el.title
            .toLocaleLowerCase()
            .includes(this.filterB.toLocaleLowerCase())
        )
      : this.listDataB;
    const sorted = filtered.sort((a, b) =>
      a.title > b.title ? 1 : a.title === b.title ? 0 : -1
    );
    return sorted;
  }

  public trackById(index: number, item: TransferItem) {
    return item.id;
  }
}
