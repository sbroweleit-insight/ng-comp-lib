import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

import { TimePickerComponent } from "./time-picker.component";

@NgModule({
  imports: [CommonModule, MatInputModule],
  exports: [TimePickerComponent],
  declarations: [TimePickerComponent],
})
export class TimePickerModule {}
