import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { NgOptimizedImage } from '@angular/common'
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

interface Event {
  title: string;
  description: string;
  date: Date;
  location: string;
  category: string;
  image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputGroupModule, ButtonModule, InputGroupAddonModule, InputTextModule, NgOptimizedImage, CarouselModule, TagModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listEvents: Event[] = [
    {
      date: new Date('2022-06-15'),
      title: 'Iftar communautaire',
      description: "Rejoignez-nous pour un Iftar communautaire pendant le Ramadan. C'est l'occasion de rompre le jeûne avec vos frères et sœurs, de partager un repas ensemble et de partager les bénédictions de ce mois sacré.",
      location: 'Casablanca Hay Hassani Villa Rachida',
      category: 'Conférence',
      image: 'images/event1.png'
    },
    {
      date: new Date('2022-06-20'),
      title: 'Rassemblement spirituel',
      description: 'Rejoignez-nous pour un rassemblement spirituel rempli de bénédictions et de conseils. Cet événement se tiendra dans notre centre principal et comprendra des conférences, des prières et des activités de groupe....',
      location: 'Khombole, Sénégal',
      category: 'Bourd',
      image: 'images/event2.png'
    },
    {
      date: new Date('2022-06-15'),
      title: 'Iftar communautaire',
      description: "Rejoignez-nous pour un Iftar communautaire pendant le Ramadan. C'est l'occasion de rompre le jeûne avec vos frères et sœurs, de partager un repas ensemble et de partager les bénédictions de ce mois sacré.",
      location: 'Casablanca Hay Hassani Villa Rachida',
      category: 'Conférence',
      image: 'images/event1.png'
    },
    {
      date: new Date('2022-06-20'),
      title: 'Rassemblement spirituel',
      description: 'Rejoignez-nous pour un rassemblement spirituel rempli de bénédictions et de conseils. Cet événement se tiendra dans notre centre principal et comprendra des conférences, des prières et des activités de groupe....',
      location: 'Khombole, Sénégal',
      category: 'Bourd',
      image: 'images/event2.png'
    },
  ]
}
