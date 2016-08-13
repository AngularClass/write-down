import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'editor',
  styles: [`
    .edit {
      border-right: 1px solid rgba(0,0,0,.5);
    }
    textarea {
      padding: 50px 0px;
      resize: none;
      border: none;
      outline: none;
      min-height: 100%;
      width: 100%;
      font-size: 2rem;
      color: rgba(0,0,0,.7);
      background-color: #eee;
    }
  `],
  template: `
    <div class="edit">
      <textarea (input)="handleChange($event)" [value]="value" autofocus></textarea>
    </div>
  `
})
export class Editor {
  @Input() value = '';
  @Output() edit = new EventEmitter();

  handleChange(event) {
    this.edit.next(event.target.value);
  }
}
