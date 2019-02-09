import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-more-info-tasks',
  templateUrl: 'more-info-tasks.html'
})
export class MoreInfoTasksPage {
    id          : any;
    pNome       : string;
    NewTask     : any;
    tkCorrigido : Boolean = false;
    tkPendente  : Boolean = false;
    tkParada    : Boolean = false;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
      this.id = navParams.get('idTask');
      switch (this.id) {
          case 1 : { this.tkPendente  = true; this.pNome='Thiago Serrano';      break; }
          case 2 : { this.tkParada    = true; this.pNome='Cesar Lopes';         break; }
          case 3 : { this.tkCorrigido = true; this.pNome='Leonardo Ikehara';    break; }
          case 4 : { this.tkPendente  = true; this.pNome='Thor Odinson';        break; }
      };
      if(this.id=='NewTask'){
         this.NewTask=true;
      }

  }
  fechaModal(){
    this.navCtrl.pop();
  }
}
