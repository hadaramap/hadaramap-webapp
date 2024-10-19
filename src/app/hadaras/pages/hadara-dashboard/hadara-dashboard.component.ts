import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hadara-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './hadara-dashboard.component.html',
  styleUrl: './hadara-dashboard.component.scss',
})
export class HadaraDashboardComponent {
  bannerDetails: { title: string; description: string  } = { title: 'Hadara Dashboard', description: 'Welcome to your Hadara dashboard!'  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data: any) => {
        this.bannerDetails = data;
      }
    );
  }

  goToRegisterNewPlaceForm() {
    this.router.navigate(['/hadaras/register-new-place']);
  }
}
