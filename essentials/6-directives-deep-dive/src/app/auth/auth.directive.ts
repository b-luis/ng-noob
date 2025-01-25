import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });

  private authService = inject(AuthService);

  private templateRef = inject(TemplateRef);
  //? needs a template ref! 
  //? container that holds views (i.e., rendered instances of a template)
  //? you can use it to insert or remove the content of the TemplateRef into the DOM
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    // run some code whenevr some signal value changes
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('SHOW ELEMENT');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('DO NOT SHOW ELEMENT');
        this.viewContainerRef.clear();
      }
    });
  }
}
