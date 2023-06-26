import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { run } from 'axe-core';
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatProgressSpinnerModule],
      declarations: [SpinnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
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

  describe('announceOnAppear', () => {
    it('should liveAnnouncer.announce if announceOnAppear is true', () => {
      spyOn(component.liveAnnouncer, 'announce');
      component.ngOnInit();

      expect(component.liveAnnouncer.announce).toHaveBeenCalled();
    });

    it('should not liveAnnouncer.announce if announceOnAppear is false', () => {
      spyOn(component.liveAnnouncer, 'announce');
      component.announceOnAppear = false;
      component.ngOnInit();

      expect(component.liveAnnouncer.announce).not.toHaveBeenCalled();
    });
  });
});
