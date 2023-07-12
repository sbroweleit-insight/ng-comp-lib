import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from '@modules/app-shared/app-shared.module';
import { run } from 'axe-core';
import { AccordionModule } from 'projects/core-ui-components/src/public_api';

import { AccordionExampleComponent } from './accordion-example.component';

describe('AccordionExampleComponent', () => {
  let component: AccordionExampleComponent;
  let fixture: ComponentFixture<AccordionExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AccordionModule,
        AppSharedModule,
        NoopAnimationsModule,
      ],
      declarations: [AccordionExampleComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have accessibility violations', (done) => {
    expect(component).toBeDefined();

    run(fixture.nativeElement, (error, result) => {
      expect(error).toBe(null);
      expect(result.violations.length).toBe(0);
      done();
    });
  });
});
