import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  title: string = 'bonjour';
  isAdmin: boolean = false;

  constructor() {}
  toggleAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
