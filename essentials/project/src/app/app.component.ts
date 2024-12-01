import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserComponent } from './features/user/user.component';
import { DUMMY_USERS } from './shared/data/dummy-users';
import { TasksComponent } from './features/tasks/tasks.component';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId: WritableSignal<string> = signal<string>('');

  constructor() {}

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId());
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
