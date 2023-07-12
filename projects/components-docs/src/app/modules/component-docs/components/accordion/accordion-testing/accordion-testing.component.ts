import { Component } from '@angular/core';
import { AccordionTestingCodeSnippets } from '../code-snippets';

@Component({
  selector: 'cui-accordion-testing',
  templateUrl: './accordion-testing.component.html',
})
export class AccordionTestingComponent {
  code = AccordionTestingCodeSnippets;
}
