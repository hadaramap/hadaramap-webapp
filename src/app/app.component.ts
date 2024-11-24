import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PlaceholderMobileComponent } from './components/placeholder-mobile/placeholder-mobile.component';
import { MenuTopBarComponent } from './components/menu-top-bar/menu-top-bar.component';
import { IsRouteActivePipe } from './core/pipes/is-route-active/is-route-active.pipe';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { switchMap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    PlaceholderMobileComponent,
    MenuTopBarComponent,
    RouterModule,
    IsRouteActivePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hadaramap-webapp';

  constructor(private authService: AuthenticationService, private translate: TranslateService) {
    this.translate.addLangs(['fr', 'en']);
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
  }

  ngOnInit(): void {
    this.registerBasicUser();
  }
  registerBasicUser() {
    this.authService.registerBasicUser().pipe(
      switchMap((register) => {
        console.log('User registration successful:', register);
        return this.authService.getBasicUserToken(this.authService.getDeviceId());
      }),
    ).subscribe((res) => {
      console.log('User Authentication successful:', res);
    });
  }
}
