import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitfListItemComponent } from '../gift-list-item/gitf-list-item.component';
import type { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifts-list',
  imports: [GitfListItemComponent],
  templateUrl: './gifts-list.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftsListComponent {
  gifts = input.required<Gif[]>();
}
