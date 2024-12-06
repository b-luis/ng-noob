import { Component, effect, input } from '@angular/core';
import { InvestmentResults } from '../models/data.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<InvestmentResults[]>();

  constructor() {
    effect(() => {
      console.log(this.results);
    });
  }
}
