import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gitf-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitfListItemComponent {

  imageUrl = input.required<string>();
 }
