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
  listA: TransferItem[];
  filterA = "";
  selectedView = false;

  constructor() {}

  ngOnInit() {
    this.listA = this.listDataA.map((el) => ({ ...el, selected: false }));
  }

  isSelectedA() {
    return this.listA.filter((el: any) => el.selected);
  }

  emitListB() {
    console.log("emitListB");

    this.selectChange.emit(this.isSelectedA());
  }

  selectFn(el: TransferItem) {
    el.selected = !el.selected;
    this.emitListB();
  }
}
