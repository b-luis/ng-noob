import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<boolean>();

  onCancel() {
    //? new version of output() requires a value to be emitted.
    this.cancel.emit(false);
  }
}
