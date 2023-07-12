import { CdkAccordionItem } from '@angular/cdk/accordion';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AccordionHeaderComponent } from './accordion-header.component';

let component: AccordionHeaderComponent;
let mockChangeDetectorRef: ChangeDetectorRef;
let mockAccordionItem: CdkAccordionItem;

describe('AccordionHeaderComponent', () => {
  beforeEach(() => {
    mockAccordionItem = {
      toggle: jasmine.createSpy('mockAccordionItem.toggle'),
      expandedChange: new EventEmitter<void>(),
    } as unknown as CdkAccordionItem;
    mockChangeDetectorRef = {
      detectChanges: jasmine.createSpy('mockChangeDetectorRef.detectChanges'),
    } as unknown as ChangeDetectorRef;
    component = new AccordionHeaderComponent(mockChangeDetectorRef);
  });

  describe('onToggle', () => {
    beforeEach(() => {
      component.accordionItem = mockAccordionItem;
      component.onToggle();
    });

    it('toggles the accordion', () => {
      expect(mockAccordionItem.toggle).toHaveBeenCalled();
    });
  });

  describe('getExpandedState', () => {
    describe('if the accordion is expanded', () => {
      beforeEach(() => {
        component.expanded = true;
      });

      it('returns "expanded"', () => {
        expect(component.getExpandedState()).toBe('expanded');
      });
    });

    describe('if the accordion is collapsed', () => {
      beforeEach(() => {
        component.expanded = false;
      });

      it('returns "collapsed"', () => {
        expect(component.getExpandedState()).toBe('collapsed');
      });
    });
  });
});
