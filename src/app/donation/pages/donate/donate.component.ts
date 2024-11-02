import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [HeaderComponent, InputMaskModule, NgOptimizedImage, ButtonModule, InputTextModule, InputGroupAddonModule, InputGroupModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss'
})
export class DonateComponent {
  listPaymentsMode = [
    { label: 'Visa', img: 'images/payment-mode/visa 1.svg',value: 'visa' },
    { label: 'Mastercard', img: 'images/payment-mode/mastercard 1.svg',value: 'mastercard' },
    { label: 'Orange Money', img: 'images/payment-mode/orange-money 1.svg',value: 'orange_money' },
    { label: 'Wave', img: 'images/payment-mode/wave 1.svg',value: 'wave' },
  ]
}
