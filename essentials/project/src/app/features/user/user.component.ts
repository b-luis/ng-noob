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
  user = input.required<User>();
  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  constructor() {}

  public onSelectUser() {
    this.select.emit(this.user().id);
  }
}
