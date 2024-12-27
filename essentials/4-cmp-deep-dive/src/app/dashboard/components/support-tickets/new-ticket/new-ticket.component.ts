import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlComponent } from '../../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form')
  // form?: ElementRef<HTMLFormElement>;

  //? without viewchild decorator, but as a function
  //? signal based viewchild
  //! available only on versions 17.3 above
  //? viewChildren()
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //? important variation of viewchild incase you need to select multiple instances of viewchild items
  // @ViewChildren(ButtonComponent) buttons

  onSubmit(title: string, ticketText: string) {
    console.log('SUBMITTED!');
    console.log(title);
    console.log(ticketText);

    this.form().nativeElement.reset();
  }
}
