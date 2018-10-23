import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../Data/quote.interface';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote[];
  constructor (
    private quoteService:QuotesService,
    private modalController:ModalController,
    private settingsService:SettingsService){
    
  }
  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes(); 
  }

  onViewQuote(quote:Quote){
    //Hier ga ik een modal window open doen om een quote te tonen.
    const modal = this.modalController.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavoriteQuotes(); 
      }
    });
  }

  onRemoveFromFavorites(quote:Quote){
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes(); 
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground': 'quoteBackground';
  }
  isAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
