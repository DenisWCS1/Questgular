import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserProfile } from './userprofile/userprofile.component';
import { SignUpComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
const ROUTES: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'profil', component: UserProfile },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
];
export { ROUTES };
