import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input()
  avatar: string = '';

  @Input()
  name: string = '';

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //? without using signals
    // this.selectedUser = DUMMY_USERS[randomIndex];
    //? using signals
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
