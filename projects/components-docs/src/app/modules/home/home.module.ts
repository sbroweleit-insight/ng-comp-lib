import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeContainerComponent } from "./home-container.component";
import { TransferListModule } from "projects/components-lib/src/public_api";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./components";
import { AppSharedModule } from "@modules/app-shared/app-shared.module";
import {
  MatNativeDateTimeModule,
  MatTimepickerModule,
} from "@dhutaryan/ngx-mat-timepicker";

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TransferListModule,
    AppSharedModule,
    MatTimepickerModule,
    MatNativeDateTimeModule,
    FormsModule,
  ],
  exports: [],
  declarations: [HomeContainerComponent, HomeComponent],
  providers: [],
})
export class HomeModule {}
