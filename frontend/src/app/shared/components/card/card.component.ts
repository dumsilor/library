import { Component, Input } from '@angular/core';
import { Books } from '../../models/book.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() book!: Books;

}
