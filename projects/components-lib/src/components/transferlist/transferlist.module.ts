import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { TransferListComponent } from "./transferlist.component";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { TransferFilterPipe } from "./transfer-filter.pipe";
import { MatChipsModule } from "@angular/material/chips";
import { OrderByPipe } from "./orderby.pipe";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [TransferListComponent],
  declarations: [TransferListComponent, TransferFilterPipe, OrderByPipe],
  providers: [],
})
export class TransferListModule {}
