import 'core-js';
import 'zone.js/dist/zone';

import { NgModule, Component, enableProdMode } from '@angular/core';
enableProdMode();
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  Devtool,
  App,
  Preview,
  Editor,
  Marked,
  SafeHTML,
  AppStore
} from './containers';



@NgModule({
  imports: [BrowserModule],
  declarations: [App, Devtool, Preview, Editor, Marked, SafeHTML],
  bootstrap: [App, Devtool],
  providers: [AppStore]
})
class AppModule {}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

document.addEventListener('DOMContentLoaded', main);
