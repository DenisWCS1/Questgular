import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfile } from './userprofile/userprofile.component';
@NgModule({
  declarations: [AppComponent, BlockComponent, UserProfile],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
