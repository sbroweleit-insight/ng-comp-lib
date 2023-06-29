import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MatTimepickerIntl {
  /** A label for inputs title. */
  inputsTitle = 'Enter time';

  /** A label for dials title. */
  dialsTitle = 'Select time';

  /** A label for hour input hint. */
  hourInputHint = 'Hour';

  /** A label for minute input hint. */
  minuteInputHint = 'Minute';

  /** Label for the button used to open the timepicker popup (used by screen readers). */
  openTimepickerLabel = 'Open timepicker';

  /** Label for the button used to close the timepicker popup (used by screen readers). */
  closeTimepickerLabel = 'Close timepicker';
}
