import { Component } from '@angular/core';

@Component({
  selector: 'cui-accordion-example',
  templateUrl: './accordion-example.component.html',
})
export class AccordionExampleComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  rightAlignToggle = false;
  allowMulti = false;
}
