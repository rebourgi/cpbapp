import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface rencontreItem {
    poule : string;
    tour : string;
    date: string;
    equipe1: string;
    equipe2: string;
    salle: string;

}

@Component({
  selector: 'page-poule',
  templateUrl: 'poule.html'
})
export class PoulePage {

  rencontresItems: Array<rencontreItem>;

  constructor(public navCtrl: NavController) {

        this.rencontresItems = [
            {poule: 'A', tour:'1', date:'03/12/2017', equipe1: 'Rennes CBP', equipe2: 'Quimper CTT' , salle: 'Rennes'},
            {poule: 'A', tour:'2', date:'10/12/2017', equipe1: 'Rennes CBP', equipe2: 'Thorigne TT' , salle: 'Quimper'},
            {poule: 'A', tour:'3', date:'15/12/2017', equipe1: 'Rennes CBP', equipe2: 'Landerneau TT' , salle: 'Torigne'},

        ];
  }

}
