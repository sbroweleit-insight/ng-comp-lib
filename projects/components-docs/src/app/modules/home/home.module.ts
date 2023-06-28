import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeContainerComponent } from "./home-container.component";
import { TransferListModule } from "projects/components-lib/src/public_api";
import { AppSharedModule } from "@modules/app-shared/app-shared.module";
import {
  MatNativeDateTimeModule,
  MatTimepickerModule,
} from "@dhutaryan/ngx-mat-timepicker";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TransferListModule,
    AppSharedModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
    FormsModule,
    HomeRoutingModule,
  ],
  exports: [],
  declarations: [HomeContainerComponent],
  providers: [],
})
export class HomeModule {}
