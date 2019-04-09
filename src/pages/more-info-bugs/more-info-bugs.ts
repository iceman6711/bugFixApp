import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-more-info-bugs',
  templateUrl: 'more-info-bugs.html'
})
export class MoreInfoBugsPage {
    bgCorrigido : boolean = false;
    bgPendente  : boolean = false;
    bgCorrecao  : boolean = false;
    bgRejeitado : boolean = false;
    bgNovo      : boolean = false;
    pNome       : string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ActionSheetController: ActionSheetController) {
     var tipo : any = navParams.get('tipo');
     switch (tipo){
        case 0            : { this.bgPendente  = true;  this.pNome = 'Um Psicopata Qualquer'; break; }  
        case 1            : { this.bgCorrecao  = true;  this.pNome = 'Um Maníaco Qualquer';   break; }
        case 2            : { this.bgCorrigido = true;  this.pNome = 'Thiago Serrano';        break; }
        case 3            : { this.bgRejeitado = true;  this.pNome = 'Vivian Ikehara';        break; }
        case 'NewBug'     : { this.bgNovo      = true;  this.pNome = 'Thor Odinson';          break; } 
        default           : {                                                                 break; }
     }
  }
  fechaModal(){
      this.navCtrl.pop();
  }
  MudaStatus(tkStatus : any){
    switch (tkStatus) {
        case 0  : { this.bgPendente = true; this.bgCorrecao   = false; this.bgCorrigido  = false; this.bgRejeitado = false; break; }  
        case 1  : { this.bgCorrecao = true; this.bgPendente   = false; this.bgCorrigido  = false; this.bgRejeitado = false; break; }  
        case 2  : { this.bgCorrigido = true; this.bgCorrecao   = false; this.bgPendente = false;  this.bgRejeitado = false; break; }
        case 3  : { this.bgRejeitado    = true; this.bgCorrigido = false; this.bgCorrecao = false; this.bgPendente = false; break; }
        default   : {    console.log('Não fez nada tio');                                         break; }
    }
  }

  async AbreAction(){
    const actionSheet = await this.ActionSheetController.create({
      title: 'Selecione o Status',
      buttons: [{
        text: 'Pendente',
        handler: () => {
          this.MudaStatus(0);
        }
      }, {
        text: 'Em Correcao',
        handler: () => {
          this.MudaStatus(1);
        }
      }, {
        text: 'Corrigido',
        handler: () => {
          this.MudaStatus(2);
        }
      }, {
        text: 'Rejeitado',
        handler:()=>{
          this.MudaStatus(3);
        }
      },
      
      {
        text: 'Ooops!',
        role: 'cancel',
        handler: () => {}
      }]
    });
    await actionSheet.present();
  
}
}
