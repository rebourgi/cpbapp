import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { GoogleMaps } from '@ionic-native/google-maps';

import { HttpModule } from '@angular/http';

import { NewsPage } from '../pages/news/news';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ModalPage } from '../pages/modal/modal';
import { AgendaPage } from '../pages/agenda/agenda';
import { PoulePage } from '../pages/poule/poule';
import { PouleDetailsPage } from '../pages/poule-details/poule-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { AppVersion } from '@ionic-native/app-version';
import {RencontresService} from "../providers/rencontres/rencontres-service";

import { AgmCoreModule, NoOpMapsAPILoader, MapsAPILoader } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AppAvailability } from '@ionic-native/app-availability';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage, 
    ModalPage,
    AgendaPage,
    PoulePage,
    PouleDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmsSb3-IG6Jk_XbF4snF9_yQMv_L3ijz0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    ModalPage, 
    AgendaPage,
    PoulePage,
    PouleDetailsPage
  ],
  providers: [
    StatusBar,
    AppVersion,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    Calendar,
    RencontresService,
    GoogleMaps,
    Geolocation,
    {provide: MapsAPILoader, useClass: NoOpMapsAPILoader},
    AppAvailability,
    LaunchNavigator
  ]
})
export class AppModule {}
