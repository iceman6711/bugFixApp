import { Component } from '@angular/core';
import { Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { Splash } from '../pages/splash/splash';



@Component({
  templateUrl: 'app.html'
})
export class BugFixAPP {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, private AlertControl : AlertController, public modalCtrl: ModalController) {
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
}

