import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppSharedModule } from '@modules/app-shared/app-shared.module';
import { AccordionModule } from 'projects/core-ui-components/src/public_api';
import {
  AccordionExampleComponent,
  AccordionImplementationComponent,
  AccordionOverviewComponent,
  AccordionTestingComponent,
} from '.';

@NgModule({
  declarations: [
    AccordionImplementationComponent,
    AccordionOverviewComponent,
    AccordionExampleComponent,
    AccordionTestingComponent,
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    AccordionModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  exports: [],
  providers: [],
})
export class AccordionDocModule {}
