import {
  Component,
  computed,
  effect,
  input,
  Input,
  output,
} from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  constructor() {
    effect(() => {});
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
