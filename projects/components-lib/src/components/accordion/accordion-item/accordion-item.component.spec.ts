import { CdkAccordion } from '@angular/cdk/accordion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { ChangeDetectorRef } from '@angular/core';
import { CuiAccordionBase } from '../accordion-base';
import { AccordionBodyComponent } from '../accordion-body';
import { AccordionHeaderComponent } from '../accordion-header';
import { AccordionItemComponent } from './accordion-item.component';

let component: AccordionItemComponent;
let mockChangeDetectorRef: ChangeDetectorRef;
let mockAccordionBase: CuiAccordionBase;
let mockSelectionDispatcher: UniqueSelectionDispatcher;

describe('AccordionItemComponent', () => {
  beforeEach(() => {
    mockChangeDetectorRef = {
      detectChanges: jasmine.createSpy('mockChangeDetectorRef.detectChanges'),
    } as unknown as ChangeDetectorRef;
    mockAccordionBase = new CdkAccordion() as CuiAccordionBase;
    mockSelectionDispatcher = new UniqueSelectionDispatcher();
    component = new AccordionItemComponent(
      mockAccordionBase,
      mockChangeDetectorRef,
      mockSelectionDispatcher,
    );
  });

  describe('ngAfterViewInit', () => {
    beforeEach(() => {
      component.header = {} as unknown as AccordionHeaderComponent;
      component.body = {} as unknown as AccordionBodyComponent;
      component.ngAfterViewInit();
    });

    it('sets a reference to itself on the content child header component', () => {
      expect(component.header.accordionItem).toEqual(component);
    });

    it('sets a reference to itself on the content child body component', () => {
      expect(component.body.accordionItem).toEqual(component);
    });

    it('calls change detection', () => {
      expect(mockChangeDetectorRef.detectChanges).toHaveBeenCalled();
    });
  });
});
