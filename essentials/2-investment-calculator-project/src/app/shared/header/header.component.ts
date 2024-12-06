import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <div class="header__title">
        <img
          src="investment-calculator-logo.png"
          alt="green money bag with a dollar sign"
          class="header__logo"
        />
        <h1 class="header__heading">Investment Calculator</h1>
      </div>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
