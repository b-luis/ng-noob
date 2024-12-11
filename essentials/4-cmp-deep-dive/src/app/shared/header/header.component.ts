import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <header>
      <div id="logo">
        <img src="logo.png" alt="Website logo, a server" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Management</a>
          </li>
          <li>
            <button appButton>
              <span class="title">Login</span>
              <span class="icon">→</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
