import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  //? for backward compatibility
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //    console.log('Clicked!');
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  //? works like a viewchild
  //? allows you to get a hold of the projected content, much like a viewchild but viewchild only allows you to access the content that is within the template with the template variable but cant giv u access on projected content (ng-content)
  //? put #input variable in the template
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  //? alternative way: Signal based
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    //? executed again and again whenever anything changes on the site
    //? allow you to define functions that should be executed whenever anything changes anywhere on the entire angular app
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.control);
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
