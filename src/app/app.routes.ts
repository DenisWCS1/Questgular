import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserProfile } from './userprofile/userprofile.component';
import { SignUpComponent } from './signup/signup.component';
const ROUTES: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'profil', component: UserProfile },
  { path: 'signup', component: SignUpComponent },
];
export { ROUTES };
