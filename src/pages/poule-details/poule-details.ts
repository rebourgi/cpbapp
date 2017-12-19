import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import { RencontresService } from '../../providers/rencontres/rencontres-service';


@Component({
  selector: 'page-poule-details',
  templateUrl: 'poule-details.html'
})
export class PouleDetailsPage {

  rencontre: any;
   

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public rencontreService: RencontresService, public toastCtrl: ToastController) {
        this.rencontre = this.navParams.data;
        rencontreService.findById(this.rencontre.id).then(
            rencontre => this.rencontre = rencontre
        );
    }

}
