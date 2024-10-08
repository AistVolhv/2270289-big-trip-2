import Observable from '../framework/observable.js';
import {FilterType} from '../consts.js';

export default class FilterModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }

  // Оформляем подписку на фильтры...
  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }

}
