import { Component, computed, effect, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../shared/data/dummy-tasks';
import { Task } from '../../shared/models/task.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // name = input<string>();
  // userId = input<string>();
  selectedUser = input<User>();

  task: Task[] = DUMMY_TASKS;

  selectedUserTasks = computed(() => {
    const userId = this.selectedUser()?.id;
    return userId ? this.task.filter((task) => task.userId === userId) : [];
  });

  constructor() {
    effect(() => {
      console.log(this.task);
    });
  }

  get name() {
    return this.selectedUser()?.name;
  }
}
