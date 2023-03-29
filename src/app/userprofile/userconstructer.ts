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
class Login {
  username: string;
  password: string;

  constructor(username: string = '', password: string = '') {
    this.username = username;
    this.password = password;
  }
}
class Profile {
  name: Name = new Name();
  picture: Picture = new Picture();
  dob: Dob = new Dob();
  login: Login = new Login();
}

export { Profile };
