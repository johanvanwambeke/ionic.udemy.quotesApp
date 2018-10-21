import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../Data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup:{category:string,quotes:Quote[], icon:string};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private quoteService:QuotesService) {
  }

  ionViewWillLoad(){
    this.quoteGroup= this.navParams.data;
  }

  onAddToFavorite(selectedQuote:Quote){
    const alert =  this.alertCtrl.create(
      {
        title: 'Add Quote',
        message: 'Are you sure you want to add this to favorites',
        buttons: [
          {text:'Yes', handler:()=>{
            console.log('OK')
            this.quoteService.addQuoteToFavorites(selectedQuote);          
          }},
          {text:'No', role:'cancel', handler:()=>{console.log('Canceled!')}}
        ]
      }
    );
    alert.present();
  }
}
