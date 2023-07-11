import { Component } from "@angular/core";
import { codeSnippets } from "./code-snippets";

@Component({
  selector: "ui-docs-asdf-example",
  templateUrl: "./asdf-example.component.html",
})
export class AsdfExampleComponent {
  codeSnippets = codeSnippets;
}
