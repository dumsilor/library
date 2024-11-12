import { Component } from '@angular/core';
import { TitleComponent } from "../../shared/components/partials/title/title.component";

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent {

}
