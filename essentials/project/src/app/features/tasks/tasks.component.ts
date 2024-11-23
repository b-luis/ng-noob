import { Component, computed, effect, input, signal } from '@angular/core';
import { DUMMY_TASKS } from '../../shared/data/dummy-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task, type NewTaskData } from '../../shared/models/task.model';
import { type User } from '../../shared/models/user.model';

@Component({
  selector: 'et-tasks',
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

  public onAddTask(formVal: NewTaskData): void {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: this.selectedUser()?.id,
      dueDate: formVal.date,
      ...formVal,
    };

    this.#tasks$$.update((currentTasks: any) => [...currentTasks, newTask]);
    this.onCancelAddTask(false);
  }
}
