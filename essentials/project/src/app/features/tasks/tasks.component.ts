import { Component, computed, effect, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../shared/data/dummy-tasks';
import { Task, NewTask } from '../../shared/models/task.model';
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
  selectedUser = input.required<User | undefined>();

  #tasks$$ = signal<Task[]>(DUMMY_TASKS);
  isAddingTask$$ = signal<boolean>(false);

  selectedUserTasks = computed(() => {
    const userId = this.selectedUser()?.id;
    return userId
      ? this.#tasks$$().filter((task) => task.userId === userId)
      : [];
  });

  name = computed(() => this.selectedUser()?.name);

  constructor() {
    effect(() => {
      console.log('SELECTED USER ID', this.selectedUser()?.id);
    });
  }

  public onStartAddTask(): void {
    return this.isAddingTask$$.update((add) => !add);
  }

  public onCompleteTask(id: string): void {
    this.#tasks$$.update((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  public onCancelAddTask(bool: boolean): void {
    return this.isAddingTask$$.set(bool);
  }

  public onAddTask(formVal: NewTask): void {
    const newTask = {
      id: 't4',
      userId: this.selectedUser()?.id,
      ...formVal,
    };

    this.#tasks$$.update((currentTasks: any) => [...currentTasks, newTask]);
    this.onCancelAddTask(false);
  }
}
