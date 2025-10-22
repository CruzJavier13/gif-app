import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GiftServiceTs } from '../../services/gift.service.ts';

interface menuOption {
  label:string;
  subLabel?:string;
  route:string;
  icon:string;
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptionsComponent { 
  giftService = inject(GiftServiceTs);

  menuOptions:menuOption[] = [
    {
      label: 'Tradding',
      route: '/dashboard/tradding',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Search',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ];
}
