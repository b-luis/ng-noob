import {
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {
    //? angular does not set up a subscription here
    // console.log(this.currentStatus());

    //? workaround to execute effects
    effect(() => {
      const status = this.currentStatus();
      console.log(`Server status changed to: ${status}`);

      const interval = setInterval(() => {
        const statuses = ['online', 'offline', 'unknown'];
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];
        this.currentStatus.set(
          randomStatus as 'online' | 'offline' | 'unknown'
        );
      }, 5000);

      this.destroyRef.onDestroy(() => {
        clearInterval(interval);
      });
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
