import { Component, computed, effect, signal } from '@angular/core';
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
  selectedUserId = signal<string>('');

  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId());
  });

  constructor() {
    effect(() => {
      console.log('Selected user:', this.selectedUser()?.name);
    });
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
