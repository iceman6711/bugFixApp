import { Component,Injectable } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Injectable()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  CPF= '';
  Retorno='';
  ConnectionType=0;
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  maskedId: any;
  val: any;
  v: any;

  constructor(public navCtrl: NavController, private AlertControl : AlertController, public menu : MenuController, public http : HTTP, public plt: Platform, public ldctrl:LoadingController){
    this.menu.swipeEnable(false,'Menu');
  }
  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(parts[0].length <= 11){
      this.maskedId = this.maskCPF(parts[0]);
      return this.maskedId;
    }else { val = val.replace(/\D/g, ''); return val}
};

unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};
  maskCPF(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

  iniciaAjax(){
      let ajax = new XMLHttpRequest;
      return ajax;
  }

  presentAlert(v,a) {
    let alert = this.AlertControl.create({
      title: v,
      subTitle: a,
      buttons: ['Ok!']
    });
    alert.present();
  }

  abretela(pID?: any){
        this.navCtrl.setRoot(MenuPage,{ 'plogado': '' + 1,
                                        'Conexao': '' + 2
                                    });
  }
  defineCon(Con){
     if(Con=='hive'){
            this.ConnectionType=1;
     }else{ this.ConnectionType=2; }
  }
  SolicitaHive(CPF,Senha){
    var url                                    = '';
    let loading = this.ldctrl.create({content : "Logando...."});
    loading.present();
    if(this.ConnectionType<=1){
            url                                ='http://www.bugfixhive.com.br:8080/Control/cLogin.php?user=true&dev=true&master=trulyistheonethatpushhimselftothelimit&cpf='+CPF+'&senha='+Senha;
    }else{  url                                ='http://10.0.0.10:9995/Control/cLogin.php?user=true&dev=true&master=trulyistheonethatpushhimselftothelimit&cpf='+CPF+'&senha='+Senha;  }
    var getData='';
    return new Promise((resolve)=>{
        if((this.plt.is('ios') || this.plt.is('android')) && !this.plt.is('mobileweb')){
        this.http.get(url,getData,'Access-Control-Allow-Origin: *').then((response:any)=> {
            if(response.status=200){
                try {
                    if(response.data.length<23){
                        loading.dismissAll();
                        this.abretela(response.data);
                    }else { loading.dismissAll(); this.presentAlert('Hive diz..',response.data);}

                } catch (error) {
                    loading.dismissAll();
                    this.presentAlert('Ops!','Erro na leitura da Resposta');
                }
            }
            resolve(response.data);
        }).catch((erro:any)=>{
            loading.dismissAll();
            console.log('Erro       : '+erro.erro);
            console.log('Erro Status: '+erro.status);
        });
    }else {
            let ajax = this.iniciaAjax();
            ajax.open('GET', url, false);
            ajax.send();
            if(ajax.responseText.length<23 && ajax.responseText!=''){
                loading.dismiss();
                this.abretela(ajax.responseText);
            }else{
                loading.dismiss();
                this.presentAlert('Hive Diz..',ajax.responseText);
            }
        }
    });
  }
  login(CPF : String, Senha : String){
        //Inicia as Variaveis
        //Comeca os Testes
        this.abretela();
        return
        if(CPF.length>=14){
            if(Senha.length==8){
                    this.SolicitaHive(CPF,Senha);
            }//Fecha Else Senha length=8
            else {
                if(Senha.length>0){
                    this.presentAlert('Senha incompleta','');
                }else{  this.presentAlert('Opa!','Favor preencher a: Senha');  }//Fecha else Senha length
            }//Fecha Else Senha
        }//Fim IF CPF lenght=15
        else{
            if(CPF.length>0){
                    this.presentAlert('CPF incompleto','');
            }else{  this.presentAlert('Opa!','Favor preencher o: CPF');  }//Fecha Else CPF Length
        }//Fecha Else CPF
  }//Fecha Else Login
}
