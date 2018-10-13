import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { MoreInfoBugsPage } from '../more-info-bugs/more-info-bugs';

@Component({
  selector: 'page-my-bugs',
  templateUrl: 'my-bugs.html'
})
export class MyBugsPage {

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {
  }
  fechaModal() {
    this.navCtrl.pop();
  }
  telaMoreInfo(tipo){
    this.navCtrl.push(MoreInfoBugsPage, {'tipo': tipo });
  }
}
