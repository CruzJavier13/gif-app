import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuOptionsComponent } from '../../components/gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHeaderComponent } from "../../components/gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-page.component',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { 
  
}
