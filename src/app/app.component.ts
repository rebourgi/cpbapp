import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';

import { NewsPage } from '../pages/news/news';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AgendaPage } from '../pages/agenda/agenda';
import { PoulePage } from '../pages/poule/poule';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NewsPage;
  
  version: any;

  appMenuItems: Array<MenuItem>;
  diversMenuItems: Array<MenuItem>;
    
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public appVersion: AppVersion) {
    this.initializeApp();

    // used for an example of ngFor and navigation   
    
        this.appMenuItems = [
            {title: 'Accueil', component: NewsPage, icon: 'home'},
            {title: 'Competitions', component: PoulePage, icon: 'trophy'},
            {title: 'Agenda', component: AgendaPage, icon: 'calendar'},
            {title: 'Mon espace', component: HomePage, icon: 'ios-contact'},
        ];


        this.diversMenuItems = [
        	{title: 'Galerie', component: ListPage, icon: 'images'},
        	{title: 'Partenaires', component: ListPage, icon: 'people'},
            {title: 'A propos', component: ListPage, icon: 'information-circle'},
        ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('cordova')) {
	      this.appVersion.getVersionNumber().then((v) => {
	      	this.version = v;
	      });
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
