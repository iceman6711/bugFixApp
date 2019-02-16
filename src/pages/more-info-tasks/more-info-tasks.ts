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
    tkConcluida : Boolean = false;
    tkPendente  : Boolean = false;
    tkParada    : Boolean = false;


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
      this.id = navParams.get('idTask');
      switch (this.id) {
          case 1 : { this.tkPendente  = true; this.pNome='Thiago Serrano';      break; }
          case 2 : { this.tkParada    = true; this.pNome='Cesar Lopes';         break; }
          case 3 : { this.tkConcluida = true; this.pNome='Leonardo Ikehara';    break; }
          case 4 : { this.tkPendente  = true; this.pNome='Thor Odinson';        break; }
      };
      if(this.id=='NewTask'){
         this.NewTask=true;
      }

  }
  fechaModal(){
    this.navCtrl.pop();
  }
  zeraVariavel(){
    this.tkPendente  = false;
    this.tkConcluida = false;
    this.tkParada    = false;
  }
  teste(tkStatus : any){
    const toast = this.toastCtrl.create({
                           message  : 'OOOOOIIIII!!!',
                           duration : 2000,
                           position : 'top'
                    });
    toast.present();
    console.log(tkStatus);
    switch (tkStatus) {
        case 1  : { this.zeraVariavel(); this.tkPendente  = true; break; }
        case 2  : { this.zeraVariavel(); this.tkParada    = true; break; }
        case 3  : { this.zeraVariavel(); this.tkConcluida = true; break; }
        case 4  : { this.zeraVariavel(); this.tkPendente  = true; break; }
        default : { toast.present();                              break; }
    }
    console.log('Pendente: '+this.tkPendente);
    console.log('Concluida: '+this.tkConcluida);
    console.log('Parada : '+this.tkParada);
  }
}
