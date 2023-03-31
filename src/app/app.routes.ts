import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserProfile } from './userprofile/userprofile.component';
import { SignUpComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MyFormComponent } from './my-form/my-form.component';
import { CatalogComponentComponent } from './catalog-component/catalog-component.component';
import { AppKitchenComponent } from './app-kitchen/app-kitchen.component';
import { DeveloperComponentComponent } from './DeveloperComponent/DeveloperComponent.component';

const ROUTES: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'profil', component: UserProfile },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'myform', component: MyFormComponent },
  { path: 'catalogue', component: CatalogComponentComponent },
  { path: 'kitchen', component: AppKitchenComponent },
  { path: 'Developer', component: DeveloperComponentComponent },
];
export { ROUTES };
