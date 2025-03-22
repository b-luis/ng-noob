import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

//? providing a service on the entire application
//? provider: piece of info that lets Angular know that a certain value should be injectible
//? when u register this injectible value with the providers array, it wil lalways be
//? included in the initial code bundle because Angular sees that it is needed right from the start
// bootstrapApplication(
//   AppComponent
// {providers: [TasksService]},
// ).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
