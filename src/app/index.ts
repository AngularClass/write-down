import 'core-js';
import 'zone.js/dist/zone';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Root, Preview, Editor } from './containers';

@NgModule({
  imports: [BrowserModule],
  declarations: [Root, Preview, Editor],
  bootstrap: [Root]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
