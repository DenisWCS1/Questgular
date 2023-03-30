import { Component } from '@angular/core';
import { Order } from './my-form.class';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: Order = new Order('', 0, new Date(), '');

  onSubmit(): void {
    // form submitted
    console.log(this.model.quantity);
    console.log();
  }
}
