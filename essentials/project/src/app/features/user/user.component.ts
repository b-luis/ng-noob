import {
  Component,
  computed,
  effect,
  input,
  Input,
  output,
} from '@angular/core';
import { User } from '../../shared/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  user = input.required<User>();
  select = output<string>();
  selected = input.required<boolean>();

  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  constructor() {
    effect(() => {
      console.log('User:', this.user());
      console.log('Selected:', this.selected());
    });
  }

  ngOnInit() {
    console.log(this.selected());
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
