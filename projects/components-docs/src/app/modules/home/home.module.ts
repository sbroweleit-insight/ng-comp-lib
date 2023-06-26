import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./components";
import { HomeContainerComponent } from "./home-container.component";
import { HomeRoutingModule } from "./home.routing.module";
import { AppSharedModule } from "../app-shared/app-shared.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [],
  declarations: [HomeComponent, HomeContainerComponent],
  providers: [],
})
export class HomeModule {}
