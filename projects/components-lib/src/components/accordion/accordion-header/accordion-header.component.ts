import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { matExpansionAnimations } from '../accordion.animations';

@Component({
  selector: 'cui-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  animations: [matExpansionAnimations.indicatorRotate],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cui-accordion-header',
    '[style.height]': '_getHeaderHeight()',
  },
})
export class AccordionHeaderComponent implements OnDestroy {
  @Input() expandedHeight: string;
  @Input() collapsedHeight: string;
  @Input() rightAlignToggle: boolean = false;
  @HostBinding('class.expanded') expanded: boolean;
  @HostBinding('class.right-align-toggle') get isRightAlignedToggle(): boolean {
    return this.rightAlignToggle;
  }
  @HostBinding('class.left-align-toggle') get isLeftAlignedToggle(): boolean {
    return !this.rightAlignToggle;
  }
  id: string = '';
  private _accordionItem: CdkAccordionItem;
  private _accordionChangeSubscription: Subscription;

  set accordionItem(accordionItem: CdkAccordionItem) {
    this._accordionItem = accordionItem;
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

  get accordionItem(): CdkAccordionItem {
    return this._accordionItem;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this._accordionChangeSubscription?.unsubscribe();
  }

  onToggle(): void {
    this._accordionItem.toggle();
  }

  getExpandedState(): string {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  private _getHeaderHeight(): string | null {
    if (this.expanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!this.expanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
}
