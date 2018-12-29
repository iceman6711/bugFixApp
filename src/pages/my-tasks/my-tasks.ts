import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-tasks',
  templateUrl: 'my-tasks.html'
})
export class MyTasksPage {

  constructor(public navCtrl: NavController) {
  }
  fechaModal(){
    this.navCtrl.pop();
  }
}
