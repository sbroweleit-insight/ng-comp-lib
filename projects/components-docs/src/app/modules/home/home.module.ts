import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeContainerComponent } from "./home-container.component";
import { TransferListModule } from "projects/components-lib/src/public_api";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./components";
import { AppSharedModule } from "@modules/app-shared/app-shared.module";

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TransferListModule,
    AppSharedModule,
  ],
  exports: [],
  declarations: [HomeContainerComponent, HomeComponent],
  providers: [],
})
export class HomeModule {}
