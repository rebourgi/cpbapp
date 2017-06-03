import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public listNews;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider: NewsProvider) {
    this.getNews();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  getNews() {
    this.newsProvider.getNews().subscribe(
      data => {
        this.listNews = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

}