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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     var tipo : string = navParams.get('tipo');
     switch (tipo){
        case 'corrigido' : { this.bgCorrigido = true; break; }
        case 'pendente'  : { this.bgPendente  = true; break; }
        case 'correcao'  : { this.bgCorrecao  = true; break; }
        case 'rejeitado' : { this.bgRejeitado = true; break; }
        default          : {                          break; }
     }
  }
  fechaModal(){
      this.navCtrl.pop();
  }
}
