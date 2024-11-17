import { Component, computed, effect, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //? old way (Angular < 18)
  // @Input({ required: true }) avatar: string = '';
  // @Input({ required: true }) name: string = '';

  //? new way (Angular 18)
  //? receiving input using signal
  //?   syntax: input.required<T>()
  //?   note: you cant pass an initial val by  setting it as required
  avatar = input.required<string>();
  name = input.required<string>();

  //? without using signals
  // get imagePath(): string {
  //   return 'assets/users/' + this.avatar;
  // }

  //? using signals
  imagePath = computed(() => 'assets/users/' + this.avatar());

  constructor() {
    //? runs when signal value changes
    effect(() => {
      console.log(this.imagePath());
    });
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //? without using signals
    // this.selectedUser = DUMMY_USERS[randomIndex];
    //? using signals
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
