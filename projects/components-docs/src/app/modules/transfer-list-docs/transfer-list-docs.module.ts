import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppSharedModule } from "@modules/app-shared/app-shared.module";
import { PickListDocsComponent } from "./transfer-list-docs.component";
import { TransferListExampleComponent } from "./examples/transfer-list-example/transfer-list-example.component";

@NgModule({
  imports: [CommonModule, AppSharedModule],
  declarations: [TransferListExampleComponent, PickListDocsComponent],
})
export class PickListDocsModule {}
