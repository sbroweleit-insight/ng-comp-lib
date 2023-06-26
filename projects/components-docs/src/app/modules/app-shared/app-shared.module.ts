import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AutocompleteExampleComponent } from "./components";
import { MaterialModule } from "./material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
  ],
  declarations: [AutocompleteExampleComponent],
  exports: [AutocompleteExampleComponent, MaterialModule, ScrollingModule],
})
export class AppSharedModule {}
