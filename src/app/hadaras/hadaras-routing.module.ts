import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadComponent: () =>
      import('./pages/hadara-dashboard/hadara-dashboard.component').then(
        (m) => m.HadaraDashboardComponent
      ),
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
