import { CdkAccordion } from '@angular/cdk/accordion';
import { Component, HostBinding, Input } from '@angular/core';
import {
  CuiAccordionBase,
  CuiAccordionDisplayMode,
  CUI_ACCORDION,
} from './accordion-base';

@Component({
  selector: 'cui-accordion',
  templateUrl: './accordion.component.html',
  providers: [{ provide: CUI_ACCORDION, useExisting: AccordionComponent }],
})
export class AccordionComponent
  extends CdkAccordion
  implements CuiAccordionBase
{
  @Input() displayMode: CuiAccordionDisplayMode = 'default';
  @HostBinding('class.cui-accordion-multi') get isExpanded(): boolean {
    return this.multi;
  }
}
