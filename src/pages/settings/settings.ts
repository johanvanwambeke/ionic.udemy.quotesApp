import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
import { TabsPage } from '../../tabs/tabs';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor (private settingsService:SettingsService, private navCtrl:NavController){}

  onToggle(toggle:Toggle){
    this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

  onCloseSettings(){
    this.navCtrl.setRoot(TabsPage);
  }
}
