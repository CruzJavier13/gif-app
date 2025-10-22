import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GiftsListComponent } from "../../components/gifts-list/gifts-list.component";
import { GiftServiceTs } from '../../services/gift.service.ts';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page.component',
  imports: [GiftsListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { 

  searchService = inject(GiftServiceTs);
  gifts = signal<Gif[]>([]);

  onSearch(query: string) {
    return this.searchService.searchGift(query).subscribe( resp => {
      this.gifts.set( resp );
    });
    
  }
}
