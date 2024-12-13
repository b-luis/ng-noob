import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard-item',
  standalone: true,
  imports: [],
  template: `
    <article>
      <header>
        <img [src]="img().src" [alt]="img().alt" />
        <h2>{{ title() }}</h2>
      </header>
      <ng-content></ng-content>
    </article>
  `,
  styleUrl: './dashboard-item.component.css',
  // host: { class: 'dashboard-item' },
})
export class DashboardItemComponent {
  img = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
