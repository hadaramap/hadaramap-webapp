import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { Event } from '@app/core/models/event.model';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [HeaderComponent, TagModule, CommonModule, NgOptimizedImage],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
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
