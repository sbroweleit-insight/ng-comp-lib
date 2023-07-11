import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared";
import { AsdfModule } from "projects/ui-components/src/public-api";
import { AsdfExampleComponent } from "./examples";
import { AsdfDocsComponent } from "./asdf-docs.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AsdfModule
  ],
  declarations: [AsdfDocsComponent, AsdfExampleComponent],
})
export class AsdfDocsModule {}
