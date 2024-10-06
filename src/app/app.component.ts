import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PlaceholderMobileComponent } from './components/placeholder-mobile/placeholder-mobile.component';
import { MenuTopBarComponent } from './components/menu-top-bar/menu-top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    PlaceholderMobileComponent,
    MenuTopBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hadaramap-webapp';
}
