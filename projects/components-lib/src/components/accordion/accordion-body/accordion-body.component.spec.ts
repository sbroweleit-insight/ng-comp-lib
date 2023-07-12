import { AnimationEvent } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { AccordionBodyComponent } from './accordion-body.component';

let component: AccordionBodyComponent;
let mockChangeDetectorRef: ChangeDetectorRef;

describe('AccordionBodyComponent', () => {
  beforeEach(() => {
    mockChangeDetectorRef = {
      detectChanges: jasmine.createSpy('mockChangeDetectorRef.detectChanges'),
    } as unknown as ChangeDetectorRef;
    component = new AccordionBodyComponent(mockChangeDetectorRef);
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

  describe('bodyAnimationDone', () => {
    let mockAnimationEvent: AnimationEvent;

    describe('if the animation state is ending in an expanded state', () => {
      beforeEach(() => {
        mockAnimationEvent = {
          fromState: 'collapsed',
          toState: 'expanded',
        } as unknown as AnimationEvent;
      });

      it('causes the afterExpand event emitter to emit an event', (done) => {
        component.afterExpand.pipe(take(1)).subscribe((value) => {
          expect(value).toBeUndefined();
          done();
        });
        component.bodyAnimationDone(mockAnimationEvent);
      });
    });

    describe('if the animation state is ending in a collapsed state', () => {
      beforeEach(() => {
        mockAnimationEvent = {
          fromState: 'expanded',
          toState: 'collapsed',
        } as unknown as AnimationEvent;
      });

      it('causes the afterCollapse event emitter to emit an event', (done) => {
        component.afterCollapse.pipe(take(1)).subscribe((value) => {
          expect(value).toBeUndefined();
          done();
        });
        component.bodyAnimationDone(mockAnimationEvent);
      });
    });
  });
});
