import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '@app/components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-praying-time',
  standalone: true,
  imports: [
    HeaderComponent,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './praying-time.component.html',
  styleUrl: './praying-time.component.scss',
})
export class PrayingTimeComponent {
  listsPays: {
    value: string;
    label: string;
  }[] = [
    { value: 'fr', label: 'France' },
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
  ];

  listCities: {
    value: string;
    label: string;
  }[] = [
    { value: 'paris', label: 'Paris' },
    { value: 'marseille', label: 'Marseille' },
    { value: 'london', label: 'London' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'new-york', label: 'New York' },
  ];
  listMonths: {
    value: string;
    label: string;
  }[] = [
    { value: '01', label: 'Janvier' },
    { value: '02', label: 'Février' },
    { value: '03', label: 'Mars' },
    { value: '04', label: 'Avril' },
    { value: '05', label: 'Mai' },
    { value: '06', label: 'Juin' },
    { value: '07', label: 'Juillet' },
    { value: '08', label: 'Aout' },
    { value: '09', label: 'Septembre' },
    { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' },
    { value: '12', label: 'Décembre' },
  ];
  selectedMonth?: string;
  filterForm: FormGroup = new FormGroup({});
  cols = [
    { field: 'date', header: 'Date' },
    { field: 'sobh', header: 'Sobh' },
    { field: 'chorouq', header: 'Chorouq' },
    { field: 'dohr', header: 'Dohr' },
    { field: 'asr', header: 'Asr' },
    { field: 'magrhib', header: 'Magrhib' },
    { field: 'icha', header: 'Icha' },
  ];
  listPrayingTimeByMonth = [
    {
      date: '2023-01-01',
      sobh: '04:50',
      chorouq: '05:40',
      dohr: '12:00',
      asr: '16:00',
      magrhib: '18:30',
      icha: '19:30',
    },
    {
      date: '2023-01-02',
      sobh: '04:51',
      chorouq: '05:41',
      dohr: '12:01',
      asr: '16:01',
      magrhib: '18:31',
      icha: '19:31',
    },
    // Add more days as needed
  ];
  constructor(private fb: FormBuilder) {
    this.filterForm = fb.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.filterForm.value);
    this.filterForm.markAllAsTouched();
  }
}
