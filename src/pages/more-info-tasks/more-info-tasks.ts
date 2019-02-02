import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-more-info-tasks',
  templateUrl: 'more-info-tasks.html'
})
export class MoreInfoTasksPage {
    id      : any;
    NewTask : any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
      this.id = navParams.get('idTask');
      if(this.id=='NewTask'){
         this.NewTask=true;
      }

  }
  fechaModal(){
    this.navCtrl.pop();
  }
}
