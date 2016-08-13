import { Component } from '@angular/core';
import { AppStore } from './app-store';

@Component({
  selector: 'app',
  template: `
    <div class="app">
      <div class="container app">
        <div class="row app">
          <div class="col-xs app">
            <editor (edit)="onEdit($event)" [value]="markdown"></editor>
          </div>
          <div class="col-xs app">
            <preview [markdown]="markdown"></preview>
          </div>
        </div>
      </div>
    </div>
  `
})
export class App {
  markdown = '';

  constructor(public appStore: AppStore) {
    appStore
      .changes
      .pluck<string>('markdown')
      .filter(Boolean)
      .subscribe(markdown => this.markdown = markdown);
  }

  onEdit(raw) {
    var state = this.appStore.getState();

    var newState = Object.assign({}, state, {
      markdown: raw
    });

    this.appStore.setState(newState);
  }

}
