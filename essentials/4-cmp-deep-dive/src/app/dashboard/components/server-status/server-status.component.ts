import {
  Component,
  DestroyRef,
  inject,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      // 0 - 0.9999999
      const rnd = Math.random();

      rnd < 0.5
        ? (this.currentStatus = 'online')
        : rnd < 0.9
        ? (this.currentStatus = 'offline')
        : (this.currentStatus = 'unknown');
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
