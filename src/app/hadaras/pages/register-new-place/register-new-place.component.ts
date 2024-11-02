import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { GeolocationService } from '@app/core/services/geolocation/geolocation.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register-new-place',
  standalone: true,
  imports: [
    HeaderComponent,
    CheckboxModule,
    CommonModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    MessageModule,
  ],
  templateUrl: './register-new-place.component.html',
  styleUrl: './register-new-place.component.scss',
})
export class RegisterNewPlaceComponent {
  bannerDetails: { title: string; description: string } = {
    title: '',
    description: '',
  };
  hadaraPlaceTypeList: { label: string; value: string }[] = [
    {
      label: 'Mosquée',
      value: 'Mosquée',
    },
    {
      label: 'Zawiya',
      value: 'Zawiya',
    },
    {
      label: 'Maison',
      value: 'Maison',
    },
    {
      label: 'Salle de prière',
      value: 'Salle de prière',
    },
    {
      label: 'Salon privé',
      value: 'Salon privé',
    },
  ];

  openingDays: { label: string; value: string }[] = [
    { label: 'Lundi', value: 'Lundi' },
    { label: 'Mardi', value: 'Mardi' },
    { label: 'Mercredi', value: 'Mercredi' },
    { label: 'Jeudi', value: 'Jeudi' },
    { label: 'Vendredi', value: 'Vendredi' },
    { label: 'Samedi', value: 'Samedi' },
    { label: 'Dimanche', value: 'Dimanche' },
  ];
  formGroup: FormGroup = new FormGroup({});
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private geolocationService: GeolocationService
  ) {
    this.route.data.subscribe((data: any) => {
      this.bannerDetails = data;
    });
    this.formGroup = this.fb.group({
      locationName: ['', [Validators.required]],
      geolocation: [ null ,[Validators.required]],
      placeType: ['', [Validators.required]],
      gatheringType: ['', [Validators.required]],
      openingDays: ['', [Validators.required]],
      openingHour: ['', [Validators.required]],
      closingHour: ['', [Validators.required]],
      responsableFirstname: ['', [Validators.required]],
      responsableLastname: ['', [Validators.required]],
      responsablePhoneNumber: ['', [Validators.required]],
    });
  }
  isLoadingLocalization: boolean = false;
  hasError: boolean = false;
  getGeolocation() {
    this.isLoadingLocalization = true;
    this.hasError = false;
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        this.isLoadingLocalization = false;
        this.hasError = false;
        console.log('Current position:', position);

        this.formGroup.patchValue({
          geolocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      error: (error) => {
        this.isLoadingLocalization = false;
        this.hasError = true;
        console.error(error);
      },
    });
  }

  submitInfos() {
    console.log('form', this.formGroup.value);
    this.formGroup.markAsDirty()
  }
}
