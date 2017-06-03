import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsProvider {

  private baseUrlNews = 'http://api.cpbrennestt.fr/v1/news';

  constructor(public http: Http) {
  }

  getNews() {
    return this.http.get(this.baseUrlNews);
  }

}
