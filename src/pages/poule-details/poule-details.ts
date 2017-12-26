import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActionSheetController, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, LatLng } from '@ionic-native/google-maps';

import { RencontresService } from '../../providers/rencontres/rencontres-service';



@Component({
  selector: 'page-poule-details',
  templateUrl: 'poule-details.html'
})
export class PouleDetailsPage {

  rencontre: any;
  map: GoogleMap;
  mapElement: HTMLElement;
  
        constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public rencontreService: RencontresService, public toastCtrl: ToastController, 
    		private googleMaps: GoogleMaps, public platform: Platform) {
	        this.rencontre = this.navParams.data;
	        rencontreService.findById(this.rencontre.id).then(
	            rencontre => this.rencontre = rencontre
            );
           // Wait the native plugin is ready.
		    platform.ready().then(() => {
		      this.loadMap();
		   });
    }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    //this.map = this.googleMaps.create(this.mapElement, mapOptions);
	this.map = new GoogleMap(this.mapElement, mapOptions);
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}
