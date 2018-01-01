import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, Platform, ToastController, LoadingController} from 'ionic-angular';
import {RencontresService} from '../../providers/rencontres/rencontres-service';
import {Geolocation} from '@ionic-native/geolocation';
import {LaunchNavigator} from '@ionic-native/launch-navigator';
import {MapsAPILoader} from '@agm/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-poule-details',
  templateUrl: 'poule-details.html'
})
export class PouleDetailsPage {

  rencontre: any;
  mapReady: boolean = false;
  map: GoogleMap;

  latAgent: number = 0;
  lngAgent: number = 0;
  latClient: number = 0;
  lngClient: number = 0;
  loader: any;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private mapsAPILoader: MapsAPILoader,
    public rencontreService: RencontresService, public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public platform: Platform, private geolocation: Geolocation, private launchNavigator: LaunchNavigator) {
    this.loader = this.loadingCtrl.create({
      content: "Loading...",
    });
    this.loader.present();
    this.rencontre = this.navParams.data;
    rencontreService.findById(this.rencontre.id).then(
      rencontre => this.rencontre = rencontre
    );
    platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latAgent = resp.coords.latitude;
        this.lngAgent = resp.coords.longitude;
      });

      let watch = this.geolocation.watchPosition();
      watch.subscribe((resp) => {
        this.latAgent = resp.coords.latitude;
        this.lngAgent = resp.coords.longitude;
      });
    });
  }

  ionViewDidLoad() {
    this.mapsAPILoader.load().then(() => {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': '319 Route de Pleumeur-Bodou, 22700 PERROS GUIREC'}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.latClient = results[0].geometry.location.lat();
          this.lngClient = results[0].geometry.location.lng();
          this.loadMap();
        }
      });
    });
  }


  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latAgent,
          lng: this.lngAgent
        },
        zoom: 10,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ma position',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: this.latAgent,
            lng: this.lngAgent
          }
        });

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: this.latClient,
            lng: this.lngClient
          }
        });
        this.loader.dismiss();
      },
      (error) => {
        this.showToast('error ' + error);
        this.loader.dismiss();
      });
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }

  go() {
    this.launchNavigator.navigate([this.latClient, this.lngClient], {
      start: this.latAgent + ", " + this.lngAgent,
      appSelection: {
        dialogHeaderText: 'Y aller avec ...',
        cancelButtonText: 'Annuler',
        rememberChoice: {
          prompt: {
            headerText: 'Se souvenir de votre choix ?',
            bodyText: 'Utiliser la même application la prochaine fois ?',
            yesButtonText: 'Oui',
            noButtonText: 'Non'
          }
        }
      }
    }).then(
      success => console.log('Launched navigator'),
      error => this.showToast('Error launching navigator ' + error)
      );
  }

}
