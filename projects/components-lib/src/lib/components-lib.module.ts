import { NgModule } from "@angular/core";
import { TransferListModule, TimePickerModule } from "./core/components";

@NgModule({
  imports: [TransferListModule, TimePickerModule],
  exports: [TransferListModule, TimePickerModule],
})
export class ComponentsLibModule {}
