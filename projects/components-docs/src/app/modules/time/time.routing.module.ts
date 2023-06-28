import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimeComponent } from "./time.component";
// import { TimeComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    component: TimeComponent,
    children: [
      // { path: "", redirectTo: "overview", pathMatch: "full" },
      // { path: "overview", component: TimeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeRoutingModule {}
