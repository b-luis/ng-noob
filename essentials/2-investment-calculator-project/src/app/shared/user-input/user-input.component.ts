import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../models/data.type';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  calculate = output<Data>();

  onSubmit() {
    console.log(
      +this.initialInvestment,
      +this.annualInvestment,
      +this.expectedReturn,
      +this.duration
    );
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
