import { Component } from '@angular/core';
import { MenuTopBarComponent } from '../../../components/menu-top-bar/menu-top-bar.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTopBarComponent, InputGroupModule, ButtonModule, InputGroupAddonModule, InputTextModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
