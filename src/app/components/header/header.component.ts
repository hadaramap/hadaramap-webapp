import { Component, input } from '@angular/core';
import { BannerDetails } from '../../models/banner-details.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data = input.required<BannerDetails>();
}
