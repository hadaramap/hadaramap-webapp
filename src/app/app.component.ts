import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PlaceholderMobileComponent } from './components/placeholder-mobile/placeholder-mobile.component';
import { MenuTopBarComponent } from './components/menu-top-bar/menu-top-bar.component';
import { IsRouteActivePipe } from './core/pipes/is-route-active/is-route-active.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    PlaceholderMobileComponent,
    MenuTopBarComponent,
    RouterModule,
    IsRouteActivePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hadaramap-webapp';
}
