import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { MoreInfoBugsPage } from '../more-info-bugs/more-info-bugs';
import { ItemSliding } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-my-bugs',
  templateUrl: 'my-bugs.html'
})
export class MyBugsPage {
  buglist : any;

  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public toastCtrl : ToastController) {
      this.setBugs();
  }

  // Fecha a tela e volta para o Menu
  fechaModal() {
    this.navCtrl.pop();
  }

  // Abre a tela de mais informações
  telaMoreInfo(item){
    let index = this.buglist.indexOf(item);    
    this.navCtrl.push(MoreInfoBugsPage, {'tipo': this.buglist[index].Status });
  }

  // Abre de tela de Mais info porém configurada para cadastrar um novo Bug;
  telaNewBug(){
    this.navCtrl.push(MoreInfoBugsPage, {'tipo': 'NewBug' });
  }

  // Define a variável BugList, atualmente ela está setada manualmente, até a conclusão da comunicação Hive<->Outpost estiver concluída.
  setBugs(){
    this.buglist=[
      { 
        ID        : 1,
        Status    : 0,
        Priority  : 0,
        Descricao : 'Este não é um Bug importante no momento'
      },
      {
        ID        : 2,
        Status    : 1,
        Priority  : 1,
        Descricao : 'Este Bug Está em Correção!!'
      },
      {
        ID        : 3,
        Status    : 2,
        Priority  : 2,
        Descricao : 'Este Bug Foi Corrigido'
      },
      {
        ID        : 4,
        Status    : 3,
        Priority  : 0,
        Descricao : 'Este Bug Foi rejeitado'
      },
      {
        ID        : 5,
        Status    : 0,
        Priority  : 3,
        Descricao : 'Este não é um Bug importante no momento'
      }
    ];
  }

  // Deleta a Linha do Bug
  DeleteItem(slidingItem: ItemSliding , item){
    let porcentagem = slidingItem.getSlidingPercent();
    if(porcentagem>2.5){
      let index = this.buglist.indexOf(item);
      if(index > -1){
          this.buglist.splice(index, 1);
      }
      const toast = this.toastCtrl.create({
          message  : 'Bug apagado...',
          duration : 2000,
          position : 'top'
      });
      toast.present();
      slidingItem.close();
    }
  }
  DeleteBugBtn(item){
    let index = this.buglist.indexOf(item);
 
    if(index > -1){
        this.buglist.splice(index, 1);
    }
    const toast = this.toastCtrl.create({
      message  : 'Bug apagado...',
      duration : 2000,
      position : 'top'
    });
    toast.present();
  }
}
