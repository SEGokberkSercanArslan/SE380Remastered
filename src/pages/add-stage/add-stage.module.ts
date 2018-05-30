import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStagePage } from './add-stage';

@NgModule({
  declarations: [
    AddStagePage,
  ],
  imports: [
    IonicPageModule.forChild(AddStagePage),
  ],
})
export class AddStagePageModule {}
