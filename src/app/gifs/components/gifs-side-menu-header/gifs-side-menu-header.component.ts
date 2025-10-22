import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
//import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuHeaderComponent {
  envs = signal(environment);
  imageUrl = signal<string>('/profile.jpg');
 }
