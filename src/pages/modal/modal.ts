import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
selector: 'page-modal',
templateUrl: 'modal.html',
})
export class ModalPage {

constructor(public navCtrl: NavController, public viewCtrl : ViewController ,public navParams: NavParams) {
}
public closeModal(){
    this.viewCtrl.dismiss();
}


}