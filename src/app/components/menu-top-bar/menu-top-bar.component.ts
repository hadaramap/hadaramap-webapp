import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-top-bar',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './menu-top-bar.component.html',
  styleUrl: './menu-top-bar.component.scss',
})
export class MenuTopBarComponent {
  isHomeMenu = input<boolean>(true);
}
