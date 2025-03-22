import { Component, computed, input, output, signal } from '@angular/core';
import { Ticket } from '../support-ticket.smodel';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // configuring component input & outputs
  //? the alias 'data' will be used where we are binding the input
  //? not a good practice - avoid using it unless you really need to
  // ticket = input.required<Ticket>({ alias: 'data' });
  // theres also transform function to modify the incoming data

  data = input.required<Ticket>({});

  close = output();
  detailsVisible = signal<boolean>(false);

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onComplete() {
    this.close.emit();
  }
}
