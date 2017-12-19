import {Injectable} from '@angular/core';
import rencontres from './mock-rencontres';

@Injectable()
export class RencontresService {

  findAll() {
    return Promise.resolve(rencontres);
  }

  findById(id) {
    return Promise.resolve(rencontres[id - 1]);
  }

}