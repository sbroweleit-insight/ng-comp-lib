import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AutocompleteExampleComponent } from "./autocomplete-example.component";
import { AppSharedModule } from "../../app-shared.module";

describe("AutocompleteExampleComponent", () => {
  let fixture: ComponentFixture<AutocompleteExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        AppSharedModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AutocompleteExampleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteExampleComponent);
    fixture.detectChanges();
  });
});
