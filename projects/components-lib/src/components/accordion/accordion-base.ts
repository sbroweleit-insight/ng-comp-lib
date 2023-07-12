import { InjectionToken } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

export type CuiAccordionDisplayMode = 'default' | 'flat';

export interface CuiAccordionBase extends CdkAccordion {
  displayMode: CuiAccordionDisplayMode;
}

export const CUI_ACCORDION = new InjectionToken<CuiAccordionBase>(
  'CUI_ACCORDION',
);
