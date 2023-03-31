import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-kitchen',
  templateUrl: './app-kitchen.component.html',
  styleUrls: ['./app-kitchen.component.css'],
})
export class AppKitchenComponent implements OnInit {
  flourQuantity: any;
  saltQuantity: any;
  sugarQuantity: any;
  eggQuantity: any;
  numberOfCookies: any;
  cook: boolean = false;
  isCooked: boolean = false;
  constructor() {}

  ngOnInit() {
    console.log(this.isCooked, this.flourQuantity);
  }

  startCooking() {
    this.isCooked = true;
    console.log(this.isCooked);
  }
}
