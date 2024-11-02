import { Component, input } from '@angular/core';
import { BannerDetails } from '../../core/models/banner-details.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data?: BannerDetails;
  constructor(private route: ActivatedRoute) { 
    this.route.data.subscribe(
      (data: any) => {
        this.data = data;
      }
    );
  }
}
