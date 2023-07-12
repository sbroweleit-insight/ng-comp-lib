import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import {
  AccordionHarnessFilters,
  AccordionItemHarnessFilters,
} from './accordion-harness-filters';
import { AccordionItemHarness } from './accordion-item-harness';

/** Harness for interacting with a standard mat-accordion in tests. */
export class AccordionHarness extends ComponentHarness {
  static hostSelector = '.cui-accordion';

  /**
   * Gets a `HarnessPredicate` that can be used to search for an accordion
   * with specific attributes.
   *
   * @param options Options for narrowing the search.
   * @return a `HarnessPredicate` configured with the given options.
   */
  static with(
    options: AccordionHarnessFilters = {},
  ): HarnessPredicate<AccordionHarness> {
    return new HarnessPredicate(AccordionHarness, options);
  }

  /** Gets all accordion items which are part of the accordion. */
  async getAccordionItems(
    filter: AccordionItemHarnessFilters = {},
  ): Promise<AccordionItemHarness[]> {
    return this.locatorForAll(AccordionItemHarness.with(filter))();
  }

  /** Whether the accordion allows multiple expanded accordion items simultaneously. */
  async isMulti(): Promise<boolean> {
    return (await this.host()).hasClass('cui-accordion-multi');
  }
}
