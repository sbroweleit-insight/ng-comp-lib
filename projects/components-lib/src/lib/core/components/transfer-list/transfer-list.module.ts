import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { TransferListComponent } from "./transfer-list.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule],
  exports: [TransferListComponent],
  declarations: [TransferListComponent],
})
export class TransferListModule {}
