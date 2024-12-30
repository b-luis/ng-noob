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
