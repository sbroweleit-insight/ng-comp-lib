import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemsComponent } from './schems.component';

describe('SchemsComponent', () => {
  let component: SchemsComponent;
  let fixture: ComponentFixture<SchemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
