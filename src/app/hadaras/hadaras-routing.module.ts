import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    data: {
      title: 'Hadara Map',
      description:
        'Localisez le groupe de disciples le plus proche pour pratiquer le zikr dans la communauté, où que vous soyez.',
    },
    loadComponent: () =>
      import('./pages/hadara-dashboard/hadara-dashboard.component').then(
        (m) => m.HadaraDashboardComponent
      ),
  },
  {
    path: 'register-new-place',
    data: {
      title: 'Enregistrer un Zikr',
      description: 'Aidez les frères du chemin à rejoindre la communauté',
    },
    loadComponent: () => import('./pages/register-new-place/register-new-place.component').then(
      (m) => m.RegisterNewPlaceComponent
    )
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'map',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadarasRoutingModule {}
