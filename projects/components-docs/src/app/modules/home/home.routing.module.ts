import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components";
import { HomeContainerComponent } from "./home-container.component";

const routes: Routes = [
  {
    path: "",
    component: HomeContainerComponent,
    children: [
      { path: "", redirectTo: "overview", pathMatch: "full" },
      { path: "overview", component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
