import { MyTasksPage } from './../my-tasks/my-tasks';
import { MyBugsPage } from './../my-bugs/my-bugs';
import { Component } from '@angular/core';
import { NavController, MenuController, NavParams, Platform, Badge } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
    pID              : String;
    pNome            : String;
    ConnectionType   = 0;


  constructor(public navCtrl: NavController, private AlertControl : AlertController, public navParams: NavParams, public menu : MenuController, public http : HTTP, public plt: Platform, private badge: Badge) {
    this.mostraMenu();
    this.pID              = navParams.get('plogado');
    this.ConnectionType   = navParams.get('Conexao');
    this.carregaNome();
    this.menu.swipeEnable(true,'Menu');
 }
 
 iniciaAjax(){
  let ajax = new XMLHttpRequest;
  return ajax;
}
presentAlert(v,a){
    let alert = this.AlertControl.create({
        title: v,
        subTitle: a,
        buttons: ['Ok!']
      });
      alert.present();
}
  carregaNome(){
    var url                                    = '';
    if(this.ConnectionType<=1){
            url                                ='http://www.bugfixhive.com.br:8080/Control/cMenu.php?AuthKey=Knowledgeisthetruepower&pID='+this.pID;
    }else{  url                                ='http://10.0.0.10:9995/Control/cMenu.php?AuthKey=Knowledgeisthetruepower&pID='+this.pID }
    var getData='';
    return new Promise((resolve)=>{ 
        if(this.plt.is('ios') || this.plt.is('android')){
        this.http.get(url,getData,'Access-Control-Allow-Origin: *').then((response:any)=> {
            if(response.status=200){
                try {
                    if(response.data.length<23){
                            this.pNome = response.data;
                       }else { this.presentAlert('Hive diz..',response.data);}
                    
                } catch (error) {
                    this.presentAlert('Ops!','Erro na leitura da Resposta');
                }
            }
            resolve(response.data);
        }).catch((erro:any)=>{ 
            console.log('Erro       : '+erro.erro);
            console.log('Erro Status: '+erro.status);
        });
    }else { 
        try{
            let ajax = this.iniciaAjax();
            ajax.open('GET', url, false);
            ajax.send();
            if(ajax.responseText.length<23 && ajax.responseText!=''){
                this.pNome=ajax.responseText;
            }else{
                this.presentAlert('Hive Diz..',ajax.responseText);
            }
        }catch(e){
            this.presentAlert('Woops!',e);
        }
            
        }
    });
  } 
  mostraMenu(){
    this.menu.enable(true, 'Menu');
  } 
  mostraBugs(){
    this.navCtrl.push(MyBugsPage);
  }
  mostraTasks(){
    this.navCtrl.push(MyTasksPage);
  }
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }
}