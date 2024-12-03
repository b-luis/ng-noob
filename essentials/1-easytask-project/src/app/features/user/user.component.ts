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
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'et-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  public onSelectUser() {
    this.select.emit(this.user().id);
  }
}
