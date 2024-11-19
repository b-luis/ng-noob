import { Component, input, output } from '@angular/core';
import { Task } from '../../../shared/models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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

  onCompleteTask() {
    this.complete.emit(this.task().id);
    console.log('EMITTING THISSS', this.task().id);
  }
}
