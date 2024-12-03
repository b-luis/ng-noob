import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DUMMY_TASKS } from '../../shared/data/dummy-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task, type NewTaskData } from '../../shared/models/task.model';
import { type User } from '../../shared/models/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'et-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  selectedUser = input.required<User>();

  name = computed(() => this.selectedUser().name);
  userId = computed(() => this.selectedUser().id);

  selectedUserTasks = computed(() =>
    this.#taskService.getUserTasks(this.userId())
  );

  #taskService = inject(TasksService);

  get isAddingTask(): boolean {
    return this.#taskService.isAddingTask();
  }

  public onStartAddTask(): void {
    this.#taskService.toggleAddingTaskState();
  }

  public onCloseAddTask(bool: boolean): void {
    this.#taskService.cancelTask(bool);
  }
}
