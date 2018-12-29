import { Component } from '@angular/core';
import { Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Splash } from '../pages/splash/splash';
import { MyBugsPage } from '../pages/my-bugs/my-bugs';
import { MyTasksPage } from '../pages/my-tasks/my-tasks';


@Component({
  templateUrl: 'app.html'
})
export class BugFixAPP {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, private AlertControl : AlertController, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      let splash = modalCtrl.create(Splash);
      splash.present();
    });
  }
  presentAlert(v,a){
    let alert = this.AlertControl.create({
        title: v,
        subTitle: a,
        buttons: ['Ok!']
      });
      alert.present();
  }

  mostraBugs(){
    const modal = this.modalCtrl.create(MyBugsPage);
    modal.present();
  }
  mostraTasks(){
    const modal = this.modalCtrl.create(MyTasksPage);
    modal.present();
  }
  
}

