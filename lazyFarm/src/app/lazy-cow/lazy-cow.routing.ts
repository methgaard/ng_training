import { Routes, RouterModule } from '@angular/router';
import { LazyCowComponent } from './lazy-cow.component';

const routes: Routes = [
  {
    path: ':name',
    component: LazyCowComponent
  },
];

export const LazyCowRoutes = RouterModule.forChild(routes);
