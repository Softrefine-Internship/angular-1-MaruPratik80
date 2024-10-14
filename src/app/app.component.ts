import { Component } from '@angular/core';
import { Profile } from './profile.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cards: Profile[] = [
    new Profile('Pratik', 'abc@gmail.com', 9432876510, 20),
    new Profile('Madhav', 'xyz@gmail.com', 7698354210, 18),
    new Profile('Ayush', 'pqr@gmail.com', 9106543287, 21),
  ];
}
