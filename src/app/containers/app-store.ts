import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

const STORE_KEY = 'hello';

const _state = getLocalStorage(STORE_KEY, {
  markdown: ''
});

const STORE = new BehaviorSubject(_state);

@Injectable()
export class AppStore {
  private _store = STORE;
  changes = this._store
    .asObservable()
    .distinctUntilChanged();

  constructor() {
    const unload = Observable.fromEvent(window, 'beforeunload');

    this.changes
      .debounceTime(1000)
      .merge(unload)
      .subscribe(() => {
        setLocalStorage(STORE_KEY, this._store.value);
      });
  }

  setState(state) {
    this._store.next(state);
  }

  getState() {
    return this._store.value;
  }

}




function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch(e) {}
}
function getLocalStorage(key, defaultValue: any = {}) {
  var state = defaultValue;
  try {
    state = JSON.parse(localStorage.getItem(key));
    if (!state || typeof state !== typeof defaultValue) state = defaultValue;
  } catch(e) { state = defaultValue }
  return state;
}
