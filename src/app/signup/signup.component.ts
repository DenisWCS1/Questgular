import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
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
