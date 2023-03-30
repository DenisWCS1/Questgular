import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserProfile } from './userprofile/userprofile.component';
import { SignUpComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MyFormComponent } from './my-form/my-form.component';
const ROUTES: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'profil', component: UserProfile },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'myform', component: MyFormComponent },
];
export { ROUTES };
