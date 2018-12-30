import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html'
})
export class MyTasksPage {
    tasklist : any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
      this.setTasks();
     
  }
  fechaModal(){
    this.navCtrl.pop();
  }
  DeleteItemBtn(item){
    let index = this.tasklist.indexOf(item);
 
    if(index > -1){
        this.tasklist.splice(index, 1);
    }
  }
  DeleteItem(slidingItem: ItemSliding,item){
    let porcentagem = slidingItem.getSlidingPercent();
    if(porcentagem>4.5){
      let index = this.tasklist.indexOf(item);
 
      if(index > -1){
          this.tasklist.splice(index, 1);
      }
      const toast = this.toastCtrl.create({
          message  : 'Task apagada...',
          duration : 2000,
          position : 'top'
      });
      toast.present();
      slidingItem.close();
      //componentRefresh;
    } 
  }
  setTasks(){
    this.tasklist = [
      { 
        titulo    : '#1',
        descricao : 'Cadastrar Bugs!',
        status    : 0
      },
      {
        titulo    : '#2',
        descricao : 'Olhar Wonderlist!',
        status    : 2
      },
      {
        titulo    : '#3',
        descricao : 'Visualizar ZenDesk!',
        status    : 0
      }
    ]
  }
}
