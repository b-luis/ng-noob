import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService: TasksService = inject(TasksService);

  selectedFilter = signal<string>('all');

  //? This binds `tasks` to the read-only `allTasks` signal from `TasksService`,
  //? allowing the component to react to task updates while ensuring immutability of the original data.
  // tasks = this.tasksService.allTasks;
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter((task) => {
          task.status === 'IN_PROGRESS';
        });
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');

      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
