import { Component, computed, effect, input, signal } from '@angular/core';
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
  selectedUser = input.required<User | undefined>();

  selectedUserTasks = computed(() => {
    const userId = this.selectedUser()?.id;
    return this.taskService.getUserTasks(userId);
  });

  name = computed(() => this.selectedUser()?.name);

  constructor(private taskService: TasksService) {}

  get isAddingTask(): boolean {
    return this.taskService.isAddingTask();
  }

  public onStartAddTask(): void {
    this.taskService.toggleAddingTaskState();
  }

  public onCompleteTask(id: string): void {
    this.taskService.removeTask(id);
  }

  public onCancelAddTask(bool: boolean): void {
    this.taskService.cancelTask(bool);
  }

  public onAddTask(formVal: NewTaskData): void {
    const userId = this.selectedUser()?.id;
    if (!userId) throw new Error('No user selected');

    this.taskService.addTask(formVal, userId);
  }
}
