import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {}
