import { Component, OnInit } from '@angular/core';
import Developer from '../models/developer.model';
import { skill } from '../models/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './DeveloperComponent.component.html',
  styleUrls: ['./DeveloperComponent.component.css'],
})
export class DeveloperComponentComponent implements OnInit {
  dev: Developer = new Developer();
  GetRandomUser(): void {
    fetch('https://randomuser.me/api?net=en')
      .then(function (response) {
        return response.json();
      })
      .then((userdata) => {
        const data = userdata.results[0];
        this.dev = new Developer();
        this.dev.firstname = data.name.first;
        this.dev.lastname = data.name.last;
        this.dev.picture.thumbnail = data.picture.thumbnail;
        this.dev.picture.large = data.picture.large;
        this.dev.picture.medium = data.picture.medium;
        this.dev.age = data.dob.age;
        this.dev.gender = data.gender;
        this.dev.skills = [
          new skill('HTML', '../assets/pictures/html.png', 'http://mysite.fr'),
          new skill(
            'ANGULAR',
            '../assets/pictures/angular.png',
            'http://mysite.fr'
          ),
          new skill('CSS', '../assets/pictures/css.png', 'http://mysite.fr'),
          new skill(
            'REACT',
            '../assets/pictures/react.png',
            'http://mysite.fr'
          ),
          new skill(
            'JAVASCRIPT',
            '../assets/pictures/javascript.png',
            'http://mysite.fr'
          ),
        ];
      });
  }

  constructor() {}

  ngOnInit() {
    this.GetRandomUser();
  }
}
