import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicGuard } from './public.guard';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [PublicGuard],
    data: { title: 'Welcome to Attica Digital Twin' },
    title: 'Welcome to Attica Digital Twin',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
