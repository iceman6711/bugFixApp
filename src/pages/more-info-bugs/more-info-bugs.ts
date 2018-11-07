import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     var tipo : string = navParams.get('tipo');
     switch (tipo){
        case 'corrigido' : { this.bgCorrigido = true;  this.pNome = 'Thiago Serrano';        break; }
        case 'pendente'  : { this.bgPendente  = true;  this.pNome = 'Um Psicopata Qualquer'; break; }
        case 'correcao'  : { this.bgCorrecao  = true;  this.pNome = 'Um Maníaco Qualquer';   break; }
        case 'rejeitado' : { this.bgRejeitado = true;  this.pNome = 'Vivian Ikehara';        break; }
        case 'NewBug'    : { this.bgNovo      = true;  this.pNome = 'Thor Odinson';          break; } 
        default          : {                                                                 break; }
     }
  }
  fechaModal(){
      this.navCtrl.pop();
  }
}
