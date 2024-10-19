import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Horaires de prière',
      description: "Sélectionnez votre pays et votre ville pour voir les horaires de prière d'aujourd'hui.",
    },
    loadComponent: () =>
      import('./pages/praying-time/praying-time.component').then(
        (m) => m.PrayingTimeComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayingTimeRoutingModule {}
