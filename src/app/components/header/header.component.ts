import { Component, input } from '@angular/core';
import { BannerDetails } from '../../models/banner-details.model';
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
        console.log(data);
        
        this.data = data;
      }
    );
  }
}
