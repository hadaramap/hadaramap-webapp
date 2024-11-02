import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Soutenez HadaraMap',
      description: 'Votre don nous aide à développer le projet et à créer des emplois.',
    },
    loadComponent: () => import('./pages/donate/donate.component').then(m => m.DonateComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
