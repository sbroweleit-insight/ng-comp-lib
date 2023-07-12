import { BaseHarnessFilters } from '@angular/cdk/testing';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AccordionHarnessFilters extends BaseHarnessFilters {}

export interface AccordionItemHarnessFilters extends BaseHarnessFilters {
  title?: string | RegExp | null;
  description?: string | RegExp | null;
  body?: string | RegExp;
  expanded?: boolean;
  disabled?: boolean;
}
