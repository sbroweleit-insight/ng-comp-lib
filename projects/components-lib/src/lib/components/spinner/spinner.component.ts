import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() ariaLabel = 'loading';
  @Input() announceOnAppear = true;

  constructor(public liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    if (this.announceOnAppear) {
      this.liveAnnouncer.announce(this.ariaLabel);
    }
  }
}
