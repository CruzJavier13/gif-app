import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { environment } from '@environments/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable } from 'rxjs';

const GIF_KEY = 'gifSearchHistory';

const loadFromLocalStorage = (): {} =>{
  const giftsFromStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifts = JSON.parse(giftsFromStorage);
  return gifts;
};

@Injectable({
  providedIn: 'root'
})
export class GiftServiceTs {

  private http = inject(HttpClient);

  constructor() { 
    this.loadingTrendingGift();
  }

  safeToLocalStorage = effect( ()=>{
    const history = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY,  history );
  });

  trendingGifts = signal<Gif[]>([])
  loadTrendingGift = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed<string[]>( () => Object.keys( this.searchHistory() ) );

  loadingTrendingGift(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: '25',
        rating: 'G'
      }
    }).subscribe( resp => {
      const gifts = GifMapper.mapGiphyItemsToGifs( resp.data );
      this.trendingGifts.set( gifts );
      this.loadTrendingGift.set(false);
      //console.log(gifts);
    }
    );
  }

  searchGift(query: string):Observable<Gif[]>{
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/search`, {
      params: {
        api_key: environment.giphyApiKey,
        q: query,
        limit: '25',
        rating: 'G'
      }
    }).pipe( 
      map( ({data}) => data ),
      map( items => GifMapper.mapGiphyItemsToGifs(items) ),

      //TODO: History management
      map(items => { 
        this.searchHistory.update( history => ({
            ...history,
            [query.toLowerCase()]: items 
        }));
        return items;
      })
    );
    //.subscribe( resp => {
    //  const gifts = GifMapper.mapGiphyItemsToGifs( resp.data );
    //  this.trendingGifts.set( gifts );
    //  this.loadTrendingGift.set(false);
    //  console.log(gifts);
    //}
    //);
  }

  getHistoryGift(query: string){
    return this.searchHistory()[query] ?? localStorage.getItem('gifSearchHistory') ? JSON.parse( localStorage.getItem('gifSearchHistory')! )[query] ?? [] : [];
  }
}
