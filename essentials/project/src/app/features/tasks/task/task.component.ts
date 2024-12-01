import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from '../../../shared/models/task.model';
import { CardComponent } from '../../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'et-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();

  #taskService = inject(TasksService);

  public onCompleteTask(): void {
    this.#taskService.removeTask(this.task().id);
  }
}
