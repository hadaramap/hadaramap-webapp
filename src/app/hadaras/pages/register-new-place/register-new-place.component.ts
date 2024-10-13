import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-register-new-place',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './register-new-place.component.html',
  styleUrl: './register-new-place.component.scss'
})
export class RegisterNewPlaceComponent {
  bannerDetails: { title: string; description: string  } = { title: '', description: ''  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data: any) => {
        this.bannerDetails = data;
      }
    );
  }
}
