import { Component, Input, Pipe } from '@angular/core';
import { DomSanitizationService, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTML {
  constructor(private sanitizer: DomSanitizationService) {}
  transform(rawHTML) {
    if (!rawHTML) return rawHTML;
    return this.sanitizer.bypassSecurityTrustHtml(rawHTML);
  }
}

@Pipe({
  name: 'marked'
})
export class Marked {
  transform(raw) {
    if (!raw) return raw;
    return marked(raw);
  }
}

@Component({
  selector: 'preview',
  template: `
    <div class="edit" [innerHTML]="markdown | marked | safeHTML"></div>
  `
})
export class Preview {
  @Input() markdown = '';


}
