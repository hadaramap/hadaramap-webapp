import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@Component({
  selector: 'app-menu-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    NgOptimizedImage,
    CommonModule,
    RouterLinkActive,
    OverlayPanelModule,
    TranslatePipe,
    TranslateDirective,
  ],

  templateUrl: './menu-top-bar.component.html',
  styleUrl: './menu-top-bar.component.scss',
})
export class MenuTopBarComponent {
  isHomeMenu = input<boolean>(true);
  languages = ['fr', 'en'];
  currentLanguage?: string;
  constructor(private translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
