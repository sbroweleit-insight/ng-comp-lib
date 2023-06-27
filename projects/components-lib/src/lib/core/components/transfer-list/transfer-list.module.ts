import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { TransferListComponent } from "./transfer-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  exports: [TransferListComponent],
  declarations: [TransferListComponent],
})
export class TransferListModule {}
