import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../../shared/models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<boolean>();

  title$$ = signal<string>('');
  summary$$ = signal<string>('');
  date$$ = signal<string>('');

  #taskService = inject(TasksService);

  public onCancel(): void {
    this.close.emit(false);
  }

  public onSubmit(): void {
    const formVal: NewTaskData = {
      title: this.title$$(),
      summary: this.summary$$(),
      date: this.date$$(),
    };

    this.#taskService.addTask(formVal, this.userId());
    this.close.emit(false);
  }
}
