import { Component } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <div class="container app">
        <div class="row app">
          <div class="col-xs app">
            <editor (edit)="handleEdit($event)"></editor>
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

  handleEdit(raw) {
    this.markdown = marked(raw);
  }
}
