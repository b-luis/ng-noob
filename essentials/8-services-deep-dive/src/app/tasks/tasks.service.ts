import { computed, inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  //? Marking `tasks` as private ensures that it is encapsulated within the service,
  //? preventing direct modification from outside components.
  private tasks = signal<Task[]>([]);

  private loggingService = inject(LoggingService);

  //? Exposing `tasks` as a read-only signal allows components to observe changes
  //? without directly mutating the data, maintaining controlled state management.
  allTasks = this.tasks.asReadonly();

  // public readonly tasksComputed = computed(() => this.tasks());

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    //? [...oldTasks] - new copy so we dont mutate the old arr object in memory
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK with title: ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log('CHANGED TASK STATUS TO: ' + newStatus);
  }
}
