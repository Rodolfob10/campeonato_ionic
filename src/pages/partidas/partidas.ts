import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PartidasProvider } from '../../providers/partidas/partidas';
import { PartidasEditPage } from '../partidas-edit/partidas-edit';

@IonicPage()
@Component({
  selector: 'page-partidas',
  templateUrl: 'partidas.html',
})
export class PartidasPage {

  partidas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public partidasProvider: PartidasProvider
    , private toast: ToastController) {
      this.getPartidas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidasPage');
  }

  ionViewWillEnter() {
    this.getPartidas();
  }

  getPartidas() {
    this.partidasProvider.findAll()
    .then(data => {
      this.partidas = data;
      console.log(this.partidas);
    });
  }
  removePartida(id: number) {
    this.partidasProvider.deleteById(id)
      .then( () => {
        this.getPartidas();
        this.toast.create({ message: 'Partida removida.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editPartida(id: number) {
    this.navCtrl.push(PartidasEditPage, {id: id});
  }

  addPartida() {
    this.navCtrl.push(PartidasEditPage);
  }


} 