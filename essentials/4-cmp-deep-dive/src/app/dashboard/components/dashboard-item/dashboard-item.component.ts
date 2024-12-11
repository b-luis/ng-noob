import { Component, input } from '@angular/core';

@Component({
  selector: 'dashboard-item',
  standalone: true,
  imports: [],
  template: ` <div class="dashboard-item">
    <article>
      <header>
        <img [src]="img().src" [alt]="img().alt" />
        <h2>{{ title() }}</h2>
      </header>
      <ng-content></ng-content>
    </article>
  </div>`,
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  img = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
