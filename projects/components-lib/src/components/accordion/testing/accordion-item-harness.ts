import {
  ContentContainerComponentHarness,
  HarnessPredicate,
} from '@angular/cdk/testing';
import { AccordionItemHarnessFilters } from './accordion-harness-filters';

/** Selectors for the various `cui-accordion-item` sections that may contain user content. */
export const enum AccordionItemSection {
  HEADER = '.cui-accordion-header',
  TOGGLE_BUTTON = '.cui-accordion-toggle-button',
  TITLE = '.mat-expansion-panel-header-title',
  DESCRIPTION = '.mat-expansion-panel-header-description',
  BODY = '.cui-accordion-body',
}

/** Harness for interacting with a standard cui-accordion-item in tests. */
export class AccordionItemHarness extends ContentContainerComponentHarness<AccordionItemSection> {
  static hostSelector = '.cui-accordion-item';

  private _header = this.locatorFor(AccordionItemSection.HEADER);
  private _toggleButton = this.locatorFor(AccordionItemSection.TOGGLE_BUTTON);
  private _title = this.locatorForOptional(AccordionItemSection.TITLE);
  private _description = this.locatorForOptional(
    AccordionItemSection.DESCRIPTION,
  );
  private _content = this.locatorFor(AccordionItemSection.BODY);

  /**
   * Gets a `HarnessPredicate` that can be used to search for an accordion-item
   * with specific attributes.
   *
   * @param options Options for narrowing the search:
   * - `title` finds an accordion-item with a specific title text.
   * - `description` finds an accordion-item with a specific description text.
   * - `expanded` finds an accordion-item that is currently expanded.
   * - `disabled` finds an accordion-item that is disabled.
   * @return a `HarnessPredicate` configured with the given options.
   */
  static with(
    options: AccordionItemHarnessFilters = {},
  ): HarnessPredicate<AccordionItemHarness> {
    return new HarnessPredicate(AccordionItemHarness, options)
      .addOption('title', options.title, (harness, title) =>
        HarnessPredicate.stringMatches(harness.getTitle(), title),
      )
      .addOption('description', options.description, (harness, description) =>
        HarnessPredicate.stringMatches(harness.getDescription(), description),
      )
      .addOption('body', options.body, (harness, body) =>
        HarnessPredicate.stringMatches(harness.getTextContent(), body),
      )
      .addOption(
        'expanded',
        options.expanded,
        async (harness, expanded) => (await harness.isExpanded()) === expanded,
      )
      .addOption(
        'disabled',
        options.disabled,
        async (harness, disabled) => (await harness.isDisabled()) === disabled,
      );
  }

  /** Whether the accordion item is expanded. */
  async isExpanded(): Promise<boolean> {
    return (await this.host()).hasClass('expanded');
  }

  /**
   * Gets the title text of the accordion item.
   *
   * @returns Title text or `null` if no title is set up.
   */
  async getTitle(): Promise<string | null> {
    const titleEl = await this._title();
    return titleEl ? titleEl.text() : null;
  }

  /**
   * Gets the description text of the accordion item.
   *
   * @returns Description text or `null` if no description is set up.
   */
  async getDescription(): Promise<string | null> {
    const descriptionEl = await this._description();
    return descriptionEl ? descriptionEl.text() : null;
  }

  /** Whether the accordion item is disabled. */
  async isDisabled(): Promise<boolean> {
    return (
      (await (await this._toggleButton()).getAttribute('disabled')) === 'true'
    );
  }

  /**
   * Toggles the expanded state of the accordion item by clicking on the toggle button.
   * This method will not work if the accordion item is disabled.
   */
  async toggle(): Promise<void> {
    await (await this._toggleButton()).click();
  }

  /** Expands the accordion item if collapsed. */
  async expand(): Promise<void> {
    if (!(await this.isExpanded())) {
      await this.toggle();
    }
  }

  /** Collapses the accordion item if expanded. */
  async collapse(): Promise<void> {
    if (await this.isExpanded()) {
      await this.toggle();
    }
  }

  /** Gets the text content of the accordion item body. */
  async getTextContent(): Promise<string> {
    return (await this._content()).text();
  }

  /** Focuses the toggle button. */
  async focus(): Promise<void> {
    return (await this._toggleButton()).focus();
  }

  /** Blurs the toggle button. */
  async blur(): Promise<void> {
    return (await this._toggleButton()).blur();
  }

  /** Whether the toggle button is focused. */
  async isFocused(): Promise<boolean> {
    return (await this._toggleButton()).isFocused();
  }

  /** Gets the position of the toggle button. */
  async getToggleButtonPosition(): Promise<'left' | 'right'> {
    // By default the expansion indicator will show "before" the panel header content.
    if (await (await this._header()).hasClass('left-align-toggle')) {
      return 'left';
    }
    return 'right';
  }
}
