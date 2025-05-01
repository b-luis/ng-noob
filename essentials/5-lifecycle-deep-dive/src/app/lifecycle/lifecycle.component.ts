import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input allows this property to receive values from a parent component.
  // Changes to this input property trigger the ngOnChanges lifecycle hook.
  @Input() text?: string;

  // The constructor is called when the component is created.
  // It is a good place to initialize default values or inject services.
  constructor() {
    console.log('CONSTRUCTOR');
  }

  // ngOnInit is called once after the component's data-bound properties have been initialized.
  // It is a good place for initialization logic that depends on bindings or inputs.
  ngOnInit() {
    console.log('ngOnInit');
  }

  // ngOnChanges is called whenever any data-bound @Input property changes.
  // It receives an object of type SimpleChanges containing current and previous values of the inputs.
  // Useful for reacting to changes in input properties.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // ngDoCheck is called during every change detection run.
  // It allows you to implement custom change detection logic beyond Angular's default mechanisms.
  //! NOTE: Use with caution, as it is called frequently and can impact performance.
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // ngAfterContentInit is called once after Angular projects content into the component.
  // This is a good place to handle initialization logic related to projected content.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // ngAfterContentChecked is called after Angular checks the projected content.
  // It is called during every change detection run after ngAfterContentInit.
  // Use it for logic that depends on changes to the projected content.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // ngAfterViewInit is called once after the component's view (template) and its child views have been initialized.
  // This is where you can safely access and manipulate DOM elements in the component's view.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // ngAfterViewChecked is called after Angular checks the component's view and its child views.
  // It is called during every change detection run after ngAfterViewInit.
  // Use it for logic that depends on view updates.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // ngOnDestroy is called right before the component is destroyed.
  // This is a good place to clean up resources, unsubscribe from Observables, and detach event handlers.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
