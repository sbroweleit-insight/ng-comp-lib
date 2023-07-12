import { CdkAccordionItem } from '@angular/cdk/accordion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  Inject,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CuiAccordionBase, CUI_ACCORDION } from '../accordion-base';
import { AccordionBodyComponent } from '../accordion-body';
import { AccordionHeaderComponent } from '../accordion-header';

@Component({
  selector: 'cui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  providers: [
    // Provide CUI_ACCORDION as undefined to prevent nested expansion panels from registering
    // to the same accordion.
    { provide: CUI_ACCORDION, useValue: undefined },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cui-accordion-item',
    '[class.cui-accordion-spacing]': '_hasSpacing()',
  },
})
export class AccordionItemComponent
  extends CdkAccordionItem
  implements AfterViewInit
{
  @ContentChild(AccordionHeaderComponent) header: AccordionHeaderComponent;
  @ContentChild(AccordionBodyComponent) body: AccordionBodyComponent;
  @HostBinding('class.expanded') get isExpanded(): boolean {
    return this.expanded;
  }
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion: CuiAccordionBase;
  private cdr: ChangeDetectorRef;

  constructor(
    @Optional() @SkipSelf() @Inject(CUI_ACCORDION) accordion: CuiAccordionBase,
    _changeDetectorRef: ChangeDetectorRef,
    _uniqueSelectionDispatcher: UniqueSelectionDispatcher,
  ) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this.accordion = accordion;
    this.cdr = _changeDetectorRef;
  }

  ngAfterViewInit(): void {
    this.header.accordionItem = this;
    this.body.accordionItem = this;
    this.cdr.detectChanges();
  }

  private _hasSpacing(): boolean {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === 'default';
    }
    return false;
  }
}
