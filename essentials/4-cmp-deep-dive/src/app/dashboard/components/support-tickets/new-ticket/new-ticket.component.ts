import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form')
  // form?: ElementRef<HTMLFormElement>;

  //? without viewchild decorator, but as a function
  //? signal based viewchild
  //! available only on versions 17.3 above
  //? viewChildren()
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //? important variation of viewchild incase you need to select multiple instances of viewchild items
  // @ViewChildren(ButtonComponent) buttons

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form()?.nativeElement);
  }

  //? If you need to work with the DOM elements or child components that are rendered in the template, you must wait until the view is initialized, which is why ngAfterViewInit is used.
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log('SUBMITTED!');
    console.log(title);
    console.log(ticketText);

    this.form().nativeElement.reset();
  }
}
