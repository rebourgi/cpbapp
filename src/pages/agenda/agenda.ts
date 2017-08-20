import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
}

}
