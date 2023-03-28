import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfile implements OnInit {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'Two beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  // Valuer initial de la visibilité du champ age
  visible = true;
  quoteInput = this.user.quote;
  constructor() {}
  // afficher ou masquer l'age
  toggleAge(): void {
    this.visible = !this.visible;
  }
  // Mise à jour de la valeur du champ quote au moment de quitter le champ
  updateQuote(): void {
    this.user.quote = this.quoteInput;
  }
  ngOnInit(): void {}
}
