import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]', // attribute selector
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content select=".title"></ng-content>
    </span>
    <span class="icon">
      <ng-content select=".icon"></ng-content>
    </span>
  `,
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
