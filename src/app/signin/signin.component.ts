import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  visible = false;
  // Objet user pour récup les valeurs du formulaire avec ngModel
  user = {
    email: '',
    password: '',
  };
  toggleForm() {
    this.visible = !this.visible;
  }
}
