import {getMockPoint,getRandomPoint} from '../mock/points.js';
import {getMockOffers} from '../mock/offers.js';
import {getMockDestinations} from '../mock/destinations.js';

const POINT_COUNT = 3;

export default class RouteModel {
  #randomPoints = Array.from({length: POINT_COUNT}, getRandomPoint);
  #points = getMockPoint();
  #offers = getMockOffers();
  #destinations = getMockDestinations();


  get points() {
    return this.#points;
  }

  get randomPoints() {
    return this.#randomPoints;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
