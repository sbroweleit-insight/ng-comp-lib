import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TimeComponent } from "./time.component";
import {
  MatNativeDateTimeModule,
  MatTimepickerModule,
  TransferListModule,
} from "projects/components-lib/src/public_api";
import { AppSharedModule } from "@modules/app-shared/app-shared.module";

import { TimeRoutingModule } from "./time.routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransferListModule,
    AppSharedModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
    FormsModule,
    TimeRoutingModule,
  ],
  exports: [],
  declarations: [TimeComponent],
  providers: [],
})
export class TimeModule {}
