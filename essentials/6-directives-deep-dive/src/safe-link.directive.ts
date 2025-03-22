import { Element } from '@angular/compiler';
import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './app/log.directive';

@Directive({
  selector: 'a[appSafeLink]', // make it as an attribute in an anchor link
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });

  // reference to the element ref
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();

      return;
    }

    event?.preventDefault();
  }
}
