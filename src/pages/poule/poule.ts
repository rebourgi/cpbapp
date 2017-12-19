import { Component } from '@angular/core';
import { Config, NavController } from 'ionic-angular';

import { PouleDetailsPage } from '../poule-details/poule-details';
import {RencontresService} from '../../providers/rencontres/rencontres-service';



@Component({
  selector: 'page-poule',
  templateUrl: 'poule.html'
})
export class PoulePage {
  rencontres: Array<any>;
  
   constructor(public navCtrl: NavController, public service: RencontresService, public config: Config) {
        this.findAll();
    }
  
   openPouleDetail(rencontre: any) {
        this.navCtrl.push(PouleDetailsPage, rencontre);
    }
    
   findAll() {
        this.service.findAll()
            .then(data => this.rencontres = data)
            .catch(error => alert(error));
    }

}
