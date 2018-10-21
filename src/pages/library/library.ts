import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../Data/quote.interface';
import quotes from '../../Data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quoteCollection:{category:string,quotes:Quote[], icon:string}[];
  ngOnInit(){
    this.quoteCollection = quotes;
  };
}
