import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../Data/quote.interface';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes:Quote[];
  constructor (
    private quoteService:QuotesService,
    private modalController:ModalController){
    
  }
  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes(); 
  }

  onViewQuote(Quote:Quote){
    //Hier ga ik een modal window open doen om een quote te tonen.
    const modal = this.modalController.create(QuotePage);
    modal.present();
  }
}
