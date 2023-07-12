import { Component } from '@angular/core';
import {
  DocsApiDataProperties,
  ImplementationSection,
} from '@modules/app-shared/models';

import { AccordionCodeSnippets } from '../code-snippets';

@Component({
  selector: 'cui-accordion-implementation',
  templateUrl: './accordion-implementation.component.html',
})
export class AccordionImplementationComponent {
  code = AccordionCodeSnippets;
  apiProperties: DocsApiDataProperties = {
    componentName: 'Accordion Component',
    selector: `<cui-accordion>`,
    exportedAs: 'AccordionComponent',
    multipleSelectorsAndExportedAs: [
      {
        selector: `<cui-accordion-body>`,
        exportedAs: `AccordionBodyComponent`,
      },
      {
        selector: `<cui-accordion-header>`,
        exportedAs: `AccordionHeaderComponent`,
      },
      {
        selector: `<cui-accordion-item>`,
        exportedAs: `AccordionItemComponent`,
      },
    ],
    sections: this.getTableData(),
  };

  private getTableData(): ImplementationSection[] {
    return [
      {
        headerName: 'AccordionComponent Properties',
        tableData: [
          {
            name: `@Input()<br />displayMode: <code>CuiAccordionDisplayMode</code>`,
            description: `Display mode used for all expansion panels in the accordion. Currently
              two display modes exist: <code>default</code> - a gutter-like spacing is
              placed around any expanded panel, placing the expanded panel at a
              different elevation from the rest of the accordion. <code>flat</code> -
              no spacing is placed around expanded panels, showing all panels at the
              same elevation.`,
          },
          {
            name: `@Input()<br />multi: <code>boolean</code>`,
            description: `Whether the accordion should allow multiple expanded accordion items simultaneously.`,
          },
          {
            name: `closeAll(): <code>void</code>`,
            description: `Closes all enabled accordion items in an accordion where multi is enabled.`,
          },
          {
            name: `id: <code>'cdk-accordion-$&lbrace;nextId++&rbrace;'</code>`,
            description: `A readonly id value to use for unique selection coordination.`,
          },
          {
            name: `openAll(): <code>void</code>`,
            description: `Opens all enabled accordion items in an accordion where multi is enabled.`,
          },
        ],
      },
      {
        headerName: 'AccordionBodyComponent Properties',
        tableData: [
          {
            name: `@Input()<br />hasDivider: <code>boolean</code>`,
            description: `Whether the accordion body renders with a dividing border line between
              the body and header. Default <code>false</code>.`,
          },
          {
            name: `@Input()<br />hasPadding: <code>boolean</code>`,
            description: `Whether the accordion body has padding. Default <code>true</code>.`,
          },
          {
            name: `@Output()<br />afterCollapse: <code>EventEmitter&lt;void&gt;</code>`,
            description: `An event emitted after the body's collapse animation happens.`,
          },
          {
            name: `@Output()<br />afterExpand: <code>EventEmitter&lt;void&gt;</code>`,
            description: `An event emitted after the body's expansion animation happens.`,
          },
        ],
      },
      {
        headerName: 'AccordionHeaderComponent Properties',
        tableData: [
          {
            name: `@Input()<br />collapsedHeight: <code>string</code>`,
            description: `Height of the header while the panel is collapsed.`,
          },
          {
            name: `@Input()<br />expandedHeight: <code>string</code>`,
            description: `Height of the header while the panel is expanded.`,
          },
          {
            name: `@Input()<br />rightAlignToggle: <code>boolean</code>`,
            description: `Whether the accordion toggle button is right aligned instead of left
              aligned. Default <code>false</code>.`,
          },
        ],
      },
      {
        headerName: 'AccordionItemComponent Properties',
        tableData: [
          {
            name: `@Output()<br />closed: <code>EventEmitter&lt;void&gt;</code>`,
            description: `Event emitted every time the AccordionItem is closed.`,
          },
          {
            name: `@Input()<br />disabled: <code>boolean</code>`,
            description: `Whether the AccordionItemComponent is disabled.`,
          },
          {
            name: `@Input()<br />expanded: <code>boolean</code>`,
            description: `Whether the AccordionItemComponent is expanded.`,
          },
          {
            name: `@Output()<br />destroyed: <code>EventEmitter&lt;void&gt;</code>`,
            description: `Event emitted when the AccordionItem is destroyed.`,
          },
          {
            name: `@Output()<br />opened: <code>EventEmitter&lt;void&gt;</code>`,
            description: `Event emitted every time the AccordionItem is opened.`,
          },
          {
            name: `accordion: <code>CuiAccordionBase</code>`,
            description: `Optionally defined accordion the AccordionItemComponent belongs to.`,
          },
          {
            name: `close(): <code>void</code>`,
            description: `Sets the expanded state of the accordion item to false.`,
          },
          {
            name: `id: <code>string</code>`,
            description: `The unique AccordionItemComponent id.`,
          },
          {
            name: `open(): <code>void</code>`,
            description: `Sets the expanded state of the accordion item to true.`,
          },
          {
            name: `toggle(): <code>void</code>`,
            description: `Toggles the expanded state of the accordion item.`,
          },
        ],
      },
      {
        headerName: 'CuiAccordionDisplayMode Type',
        tableData: [
          {
            name: `CuiAccordionDisplayMode`,
            description: `<code>'default' | 'flat'</code>`,
          },
        ],
      },
    ];
  }
}
