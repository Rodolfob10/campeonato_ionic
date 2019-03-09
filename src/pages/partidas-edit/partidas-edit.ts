import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Partida, PartidasProvider } from '../../providers/partidas/partidas';


@IonicPage()
@Component({
  selector: 'page-partidas-edit',
  templateUrl: 'partidas-edit.html',
})
export class PartidasEditPage {
  partida: Partida;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private partidasProvider: PartidasProvider) {
      this.partida = new Partida();

      if (this.navParams.data.id) {
        this.partidasProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.partida = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidasEditPage');
  }

  save() {
    this.partidasProvider.save(this.partida)
      .then(() => {
        this.toast.create({ message: 'Partida salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a partida.', duration: 3000, position: 'botton' }).present();
      });
  }


}