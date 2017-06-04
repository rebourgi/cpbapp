import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

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

  public currentNews;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private newsProvider: NewsProvider, public loadingCtrl: LoadingController) {
    this.getNews();
  }

  ionViewDidLoad() {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.newsProvider.getNews().subscribe(
      data => {
        this.listNews = data.json();
      },
      err => console.error(err),
      () => { console.log('getRepos completed'), refresher.complete(); }
    );
  }

  toggleNews(news: any) {
    if (this.isItemShown(news)) {
      this.currentNews = null;
    } else {
      this.currentNews = news;
    }
  }

  isItemShown(news: any) {
    return this.currentNews === news;
  }

  getNews() {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
    });
    loader.present();
    this.newsProvider.getNews().subscribe(
      data => {
        this.listNews = data.json();
      },
      err => console.error(err),
      () => { console.log('getRepos completed'), loader.dismiss(); }
    );
  }

}
