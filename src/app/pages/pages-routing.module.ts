import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../shared/guards/auth.guard';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  // canActivate: [AuthGuard],
  component: PagesComponent,
  children: [
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module')
        .then(m => m.ProfileModule),
    },
    {
      path: 'requests',
      loadChildren: () => import('./requests/requests.module')
        .then(m => m.RequestsModule),
    },
    {
      path: 'reviews',
      loadChildren: () => import('./reviews/reviews.module')
        .then(m => m.ReviewsModule),
    },
    {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'pages',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
