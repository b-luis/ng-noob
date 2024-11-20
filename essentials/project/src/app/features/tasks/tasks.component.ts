import { Component, computed, effect, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../shared/data/dummy-tasks';
import { Task } from '../../shared/models/task.model';
import { User } from '../../shared/models/user.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // inputs
  selectedUser = input<User>();

  // signals
  #tasks$$ = signal<Task[]>(DUMMY_TASKS);
  isAddingTask$$ = signal<boolean>(false);

  // computed values
  readonly selectedUserTasks = computed(() => {
    const userId = this.selectedUser()?.id;
    return userId
      ? this.#tasks$$().filter((task) => task.userId === userId)
      : [];
  });

  readonly name = computed(() => this.selectedUser()?.name);

  constructor() {}

  public onStartAddTask(): void {
    return this.isAddingTask$$.update((add) => !add);
  }

  public onCompleteTask(id: string): void {
    this.#tasks$$.update((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  public onCancelDialog(bool: boolean): void {
    return this.isAddingTask$$.set(bool);
  }
}
