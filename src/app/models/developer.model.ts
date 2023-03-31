import { skill } from './skill.model';

class Name {
  first: string;
  last: string;
  constructor(first: string = '', last: string = '') {
    this.first = first;
    this.last = last;
  }
}
class Picture {
  medium: string;
  thumbnail: string;
  large: string;
  constructor(medium: string = '', thumbnail: string = '', large: string = '') {
    this.medium = medium;
    this.thumbnail = thumbnail;
    this.large = large;
  }
}
class Dob {
  age: Number;
  date: string;

  constructor(age: Number = 10, date: string = '') {
    this.age = age;
    this.date = date;
  }
}

class Developer {
  picture: Picture = new Picture();
  lastname: Name = new Name();
  firstname: Name = new Name();
  age: Dob = new Dob();
  gender: string = '';
  skills: Array<skill> = [];
}

export default Developer;
