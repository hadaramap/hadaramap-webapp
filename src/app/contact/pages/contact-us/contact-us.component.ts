import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
