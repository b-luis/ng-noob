import { Component } from '@angular/core';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { SupportTicketsComponent } from './components/support-tickets/support-tickets.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
