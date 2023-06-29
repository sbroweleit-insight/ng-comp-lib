import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

interface TransferItem {
  title: string;
  selected: boolean;
}

@Component({
  selector: "lib-transfer-list",
  templateUrl: "./transferlist.component.html",
  styleUrls: ["./transferlist.component.scss"],
})
export class TransferListComponent implements OnInit {
  @Output() selectChange = new EventEmitter();
  @Input() listDataA: any[] = [];
  @Input() listDataB: any[] = [];
  listA: TransferItem[] = [];
  listB: TransferItem[] = [];
  listSelectedA: TransferItem[] = [];
  listSelectedB: TransferItem[] = [];
  filterA = "";
  filterB = "";

  selectedView = false;

  constructor() {}

  ngOnInit() {
    this.listA = this.listDataA.map((el) => ({ ...el, selected: false }));
    this.listB = this.listDataB.map((el) => ({ ...el, selected: false }));
  }

  //Here, all list items are moved to the second list
  moveAllToB() {
    this.listB = this.listB.concat(
      this.listA.map((el) => ({ ...el, selected: false }))
    );
    this.listA = [];
    this.listSelectedA = [];
    this.emitListB();
  }

  //Here, the selected list items are moved to the second list
  moveSelectToB() {
    this.listB = this.listB.concat(
      this.listSelectedA.map((el) => ({ ...el, selected: false }))
    );
    this.listA = this.listA.filter((el) => !el.selected);
    this.listSelectedA = [];
    this.emitListB();
  }

  //Here, the selected list items are moved to the first list
  moveSelectToA() {
    this.listA = this.listA.concat(
      this.listSelectedB.map((el) => ({ ...el, selected: false }))
    );
    this.listB = this.listB.filter((el) => !el.selected);
    this.listSelectedB = [];
    this.emitListB();
  }

  //Here, all list items are moved to the first list
  moveAllToA() {
    this.listA = this.listA.concat(
      this.listB.map((el) => ({ ...el, selected: false }))
    );
    this.listB = [];
    this.listSelectedB = [];
    this.emitListB();
  }

  emitListB() {
    this.selectChange.emit(this.listB);
  }

  onSelectChangeA() {
    setTimeout(
      () => (this.listSelectedA = this.listA.filter((el) => el.selected))
    );
  }

  onSelectChangeB() {
    setTimeout(
      () => (this.listSelectedB = this.listB.filter((el) => el.selected))
    );
  }

  // isSelectedA() {
  //   return this.listA.filter((el: any) => el.selected).length;
  // }
  // isSelectedB() {
  //   return this.listB.filter((el: any) => el.selected).length;
  // }
}
