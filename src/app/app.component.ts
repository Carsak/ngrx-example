import { Component } from '@angular/core';
import { User } from "../models/user";
import { Store, select } from "@ngrx/store";
import { selectUser } from "../store/user.selector";
import { UpdateUser, GetUserID } from '../store/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  user$ = this.store$.pipe(select(selectUser));

  userId$ = this.store$.dispatch(new GetUserID());

  user: User;

  constructor(
    private store$: Store
  ) {

  }

  updateUser() {
    this.user = new User();
    this.user.id = this.randomInt(100, 150);;
    this.user.cardNumber = this.randomInt(150, 200);
    this.user.name = this.randomString(6);
    this.user.cardType = this.randomString(6);

    this.store$.dispatch(new UpdateUser(this.user));
  }

  private randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  private randomString(length) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length)
  }
}
