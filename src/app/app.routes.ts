import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'hadaras',
    loadChildren: () =>
      import('./hadaras/hadaras.module').then((m) => m.HadarasModule),
  },
  {
    path: 'praying-time',
    loadChildren: () =>
      import('./praying-time/praying-time.module').then(
        (m) => m.PrayingTimeModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('./donation/donation.module').then((m) => m.DonationModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  }
  // Add more modules as needed...
  // Add more routes as needed...
];
