import { AnimationEvent } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { matExpansionAnimations } from '../accordion.animations';

@Component({
  selector: 'cui-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
})
export class AccordionBodyComponent {
  @HostBinding('class.expanded') expanded: boolean;
  @Input() hasDivider: boolean = false;
  @Input() hasPadding: boolean = true;
  @Output() afterCollapse: EventEmitter<void> = new EventEmitter<void>();
  @Output() afterExpand: EventEmitter<void> = new EventEmitter<void>();
  id: string = '';
  private _accordionChangeSubscription: Subscription;
  private readonly _bodyAnimationDoneSubject$ = new Subject<AnimationEvent>();

  set accordionItem(accordionItem: CdkAccordionItem) {
    this._accordionChangeSubscription?.unsubscribe();
    this._accordionChangeSubscription = accordionItem.expandedChange.subscribe(
      (value: boolean) => {
        this.expanded = value;
      },
    );
    this.id = accordionItem.id;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.expanded = accordionItem.expanded;
      this.cdr.detectChanges();
    }, 0);
  }

  constructor(private cdr: ChangeDetectorRef) {
    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDoneSubject$
      .pipe(
        distinctUntilChanged((x: AnimationEvent, y: AnimationEvent) => {
          return x.fromState === y.fromState && x.toState === y.toState;
        }),
      )
      .subscribe((event: AnimationEvent) => {
        if (event.fromState !== 'void') {
          if (event.toState === 'expanded') {
            this.afterExpand.emit();
          } else if (event.toState === 'collapsed') {
            this.afterCollapse.emit();
          }
        }
      });
  }

  getExpandedState(): string {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  bodyAnimationDone(event: AnimationEvent): void {
    this._bodyAnimationDoneSubject$.next(event);
  }
}
