import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from '../../../shared/models/task.model';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'et-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input<Task>({
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  });

  complete = output<string>();

  public onCompleteTask(): void {
    this.complete.emit(this.task().id);
  }
}
