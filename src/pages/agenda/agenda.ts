import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';


@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams, public calendar: Calendar) {
}

openCalendar(){
    this.calendar.openCalendar(new Date()).then(
        (msg) => { console.log(msg); },
        (err) => { console.log(err); }
    );
}



}
