import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // attribute selector
  standalone: true,
  imports: [],
  template: `

      <span>
        <ng-content />
      </span>
      <span class="icon">
        <!-- fallback, just incase icon selector isnt provided --->
        <ng-content select="icon">→</ng-content>
      </span>
    
  `,
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
