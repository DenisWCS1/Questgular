import { Component, OnInit } from '@angular/core';
import { Profile } from './userconstructer';
@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfile implements OnInit {
  user: Profile = new Profile();

  GetRandomUser(): void {
    fetch('https://randomuser.me/api?net=en')
      .then(function (response) {
        return response.json();
      })
      .then((userdata) => {
        this.user = userdata.results[0];
        console.log(this.user);
      });
  }

  // Valuer initial de la visibilité du champ age
  visible = false;
  // quoteInput = this.user.quote;
  constructor() {}
  // afficher ou masquer le
  togglePassword(): void {
    this.visible = !this.visible;
  }
  // Mise à jour de la valeur du champ quote au moment de quitter le champ
  //updateQuote(): void {
  //  this.user.quote = this.quoteInput;
  //}
  ngOnInit(): void {
    this.GetRandomUser();
  }
}
