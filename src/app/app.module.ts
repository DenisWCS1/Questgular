import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfile } from './userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfile,
    AdminComponent,
    MenuComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
