import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidasEditPage } from './partidas-edit';

@NgModule({
  declarations: [
    PartidasEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidasEditPage),
  ],
})
export class PartidasEditPageModule {}