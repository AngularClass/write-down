import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <div class="app">
      <div class="container app">
        <div class="row app">
          <div class="col-xs app">
            <editor (edit)="markdown = $event"></editor>
          </div>
          <div class="col-xs app">
            <preview [markdown]="markdown"></preview>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Root {
  markdown: string = '';

}
