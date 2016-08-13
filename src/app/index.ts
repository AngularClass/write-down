import 'core-js';
import 'zone.js/dist/zone';

import { NgModule, Component, enableProdMode } from '@angular/core';
enableProdMode();
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Root, Preview, Editor, Marked, SafeHTML } from './containers';


@Component({
  selector: 'devtool',
  template: `
    <div>
      Devtool
    </div>
  `
})
class Devtool {

}


@NgModule({
  imports: [BrowserModule],
  declarations: [Root, Preview, Editor, Marked, SafeHTML],
  bootstrap: [Root]
})
class AppModule {}

@NgModule({
  imports: [BrowserModule],
  declarations: [Devtool],
  bootstrap: [Devtool]
})
class DevtoolModule {}

const platform = platformBrowserDynamic();

export function bootstrap(module) {
  return platform.bootstrapModule(module);
}





// Hot Module Replacement

export function bootstrapDomReady() {
  // bootstrap after document is ready
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap(AppModule);
    bootstrap(DevtoolModule);
  });
}

if (module.hot) {
  // activate hot module reload
  if (document.readyState === 'complete') {
    bootstrap(AppModule)
    bootstrap(DevtoolModule);
  } else {
    bootstrapDomReady();
  }
  module.hot.accept();
} else {
  bootstrapDomReady();
}
