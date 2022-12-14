import { MyTasksPage } from './../pages/my-tasks/my-tasks';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';
import { BugFixAPP } from './app.component';
import { LoginPage } from '../pages/login/login';
import { Splash } from '../pages/splash/splash';
import { MenuPage} from '../pages/menu/menu';
import { MyBugsPage } from '../pages/my-bugs/my-bugs';
import { MoreInfoBugsPage } from '../pages/more-info-bugs/more-info-bugs'; 
import { MoreInfoTasksPage } from '../pages/more-info-tasks/more-info-tasks';

@NgModule({
  declarations: [
    BugFixAPP,
    LoginPage,
    MenuPage,
    MyBugsPage,
    MyTasksPage,
    MoreInfoBugsPage,
    MoreInfoTasksPage,
    Splash
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BugFixAPP)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BugFixAPP,
    LoginPage,
    MenuPage,
    MyBugsPage,
    MyTasksPage,
    MoreInfoBugsPage,
    MoreInfoTasksPage,
    Splash
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
@Component({
  
})
export class AppModule {}
