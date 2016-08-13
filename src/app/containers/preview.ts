import { Component, Input } from '@angular/core';

@Component({
  selector: 'preview',
  template: `
    <div class="edit" [innerHTML]="markdown"></div>
  `
})
export class Preview {
  @Input() markdown = '';
}
