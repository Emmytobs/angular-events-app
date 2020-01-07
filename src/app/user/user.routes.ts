import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

import { ProfileGuard } from './profile.guard';

export const userRoutes = [
  // {path: 'profile', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path: 'login', component: LoginComponent},
];
