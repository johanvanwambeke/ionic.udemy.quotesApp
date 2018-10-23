import { Quote } from "../Data/quote.interface";

export class QuotesService{

    private favoriteQuotes : Quote[] = [];

    addQuoteToFavorites(quote:Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote:Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id == quote.id;
        })
        this.favoriteQuotes.splice(position,1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl2:Quote)=>{
            return quoteEl2.id == quote.id;
        });
    }

    isFavorite(quote:Quote){
        return true;
    }
}