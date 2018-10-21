import { Component } from "@angular/core";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";

@Component({
    selector:'page-tabs',
    template:`
        <ion-tabs selectedIndex="1 ">
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libarayPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage{
    favoritesPage = FavoritesPage;
    libarayPage = LibraryPage;
}