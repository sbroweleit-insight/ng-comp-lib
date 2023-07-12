import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AccordionBodyComponent } from './accordion-body';
import { AccordionHeaderComponent } from './accordion-header';
import { AccordionItemComponent } from './accordion-item';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionBodyComponent,
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionItemComponent,
  ],
  imports: [
    CdkAccordionModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [
    AccordionBodyComponent,
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionItemComponent,
  ],
})
export class AccordionModule {}
