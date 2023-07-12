import { DocsCodeTabSnippet, DocsTabExample } from '@modules/app-shared/models';

const accordionExampleTs: DocsCodeTabSnippet = {
  tabName: 'TS',
  codeAriaLabel: 'Typescript code - Accordion Example',
  code: `import { Component } from '@angular/core';

@Component({
  ...
})
export class AccordionExampleComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  rightAlignToggle = false;
}`,
};

const accordionExampleHtml: DocsCodeTabSnippet = {
  tabName: 'HTML',
  codeAriaLabel: 'HTML code - Accordion Example',
  code: `<mat-slide-toggle class="mb-xs" [(ngModel)]="rightAlignToggle">
  Right Align Accordion Toggle
</mat-slide-toggle>

<cui-accordion>
  <cui-accordion-item *ngFor="let item of items; let index = index">
    <cui-accordion-header [rightAlignToggle]="rightAlignToggle">
      <div class="flex grow justify-between items-center">
        <span>{{ item }}</span>
        <button mat-stroked-button color="primary">
          Action {{ index + 1 }}
        </button>
      </div>
    </cui-accordion-header>
    <cui-accordion-body [hasDivider]="true">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
      excepturi incidunt ipsum deleniti labore, tempore non nam doloribus
      blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt
      velit culpa?
    </cui-accordion-body>
  </cui-accordion-item>
</cui-accordion>`,
};

const accordionTesting = `import { AccordionHarness, AccordionItemHarness } from '@pgr-cla/core-ui-components';`;

const accordionTestingFilters = `import { BaseHarnessFilters } from '@angular/cdk/testing';

export interface AccordionHarnessFilters extends BaseHarnessFilters {}

export interface AccordionItemHarnessFilters extends BaseHarnessFilters {
  title?: string | RegExp | null;
  description?: string | RegExp | null;
  body?: string | RegExp;
  expanded?: boolean;
  disabled?: boolean;
}`;

export const AccordionTestingCodeSnippets = {
  accordionTesting,
  accordionTestingFilters,
};

export const AccordionCodeSnippets: DocsTabExample[] = [
  {
    codeExampleName: 'Basic Code Examples',
    tabData: [accordionExampleHtml, accordionExampleTs],
  },
];
