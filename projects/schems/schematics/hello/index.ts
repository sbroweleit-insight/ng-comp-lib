import {
  Rule,
  Tree,
  SchematicContext,
  apply,
  url,
  applyTemplates,
  move,
  chain,
  mergeWith,
} from "@angular-devkit/schematics";

import { strings, normalize } from "@angular-devkit/core";

import { Schema as ModuleOptions } from "./schema";

export function hello(options: ModuleOptions): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const dasherizedName = strings.dasherize(options.name);
    const classifyName = strings.classify(options.name);

    const docsPath =
      "projects/components-docs/src/app/modules/component-docs/components/" +
      dasherizedName +
      "-docs";

    const filesSource = apply(url("./files"), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: dasherizedName,
      }),
      move(normalize(docsPath)),
    ]);

    return chain([
      createFolders(docsPath, dasherizedName, classifyName),
      mergeWith(filesSource),
    ])(_tree, _context);
  };
}

function createFolders(
  docsPath: string,
  dasherizedName: string,
  classifyName: string
): Rule {
  return (tree: Tree, _: SchematicContext) => {
    tree.create(
      normalize(`${docsPath}/examples/index.ts`),
      `export { ${classifyName}ExampleComponent } from "./${dasherizedName}/${dasherizedName}-example.component";`
    );
    tree.create(
      normalize(`${docsPath}/examples/${dasherizedName}/code-snippets.ts`),
      "const exampleTs = ``;const exampleHtml = ``;const exampleScss = ``;export const codeSnippets = {exampleTs, exampleHtml, exampleScss};"
    );
    return tree;
  };
}
