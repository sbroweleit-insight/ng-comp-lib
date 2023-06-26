import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "lib-transfer-list",
  templateUrl: "./transfer-list.component.html",
  styleUrls: ["./transfer-list.component.scss"],
})
export class TransferListComponent {
  @Input() leftList: string[] = []; // Left list items
  @Input() rightList: string[] = []; // Right list items
  @Output() onTransfer = new EventEmitter<string[]>(); // The transfer event

  /**
   * Transfers an item from the left list to the right list.
   * @param index The index of the item in the left list.
   */
  transferRight(index: number) {
    this.rightList.push(this.leftList.splice(index, 1)[0]);
    this.emitTransferEvent();
  }

  /**
   * Transfers an item from the right list to the left list.
   * @param index The index of the item in the right list.
   */
  transferLeft(index: number) {
    this.leftList.push(this.rightList.splice(index, 1)[0]);
    this.emitTransferEvent();
  }

  /**
   * Emit the transfer event.
   */
  private emitTransferEvent() {
    this.onTransfer.emit(this.rightList);
  }
}
