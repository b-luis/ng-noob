import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
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
  // tasks: Task[] = DUMMY_USERS;
  #tasks = signal<Task[]>(DUMMY_TASKS);

  readonly selectedUser = input<User>();

  readonly selectedUserTasks = computed(() => {
    const userId = this.selectedUser()?.id;
    return userId ? this.#tasks().filter((task) => task.userId === userId) : [];
  });

  readonly name = computed(() => this.selectedUser()?.name);

  protected onAddTask() {}

  protected onCompleteTask(id: string): void {
    //? old
    // this.tasks = this.tasks().filter((task) => task.id !== id);
    //? new -- converted to signal
    this.#tasks.update((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }
}
