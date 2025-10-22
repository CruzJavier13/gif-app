import { toSignal } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GiftServiceTs } from '../../services/gift.service.ts';
import { GiftsListComponent } from "../../components/gifts-list/gifts-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GiftsListComponent],
  templateUrl: './gif-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent { 
  gifService = inject(GiftServiceTs);
  query = toSignal( 
    inject(ActivatedRoute).params.pipe(
      map( params => params['query'] )
    )
  );
   
  gifsByKey = computed(()=>{
    return this.gifService.getHistoryGift(this.query());
  })
}
