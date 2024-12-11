import { Component, computed, inject } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  dashboardService = inject(DashboardService);

  trafficData = computed(() => this.dashboardService.dummyTrafficData());
  maxTraffic = computed(() =>
    Math.max(...this.trafficData().map((data) => data.value))
  );
}
