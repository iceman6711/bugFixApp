import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public actionSheetController: ActionSheetController) {
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
  MudaStatus(tkStatus : any){
    switch (tkStatus) {
        case '1'  : { this.tkConcluida = true; this.tkParada   = false; this.tkPendente  = false; break; }  
        case '2'  : { this.tkPendente  = true; this.tkParada   = false; this.tkConcluida = false; break; }
        case '3'  : { this.tkParada    = true; this.tkPendente = false; this.tkConcluida = false; break; }
        default   : {    console.log('Não fez nada tio');                                         break; }
    }
  }
 async AbreAction(){
        const actionSheet = await this.actionSheetController.create({
          buttons: [{
            text: 'Concluida',
            handler: () => {
              this.MudaStatus('1');
            }
          }, {
            text: 'Pendente',
            handler: () => {
              this.MudaStatus('2');
            }
          }, {
            text: 'Parada',
            handler: () => {
              this.MudaStatus('3');
            }
          }, {
            text: 'Ooops!',
            role: 'cancel',
            handler: () => {
              
            }
          }]
        });
        await actionSheet.present();
      
  }
}
