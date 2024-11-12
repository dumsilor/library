import { Component, Input } from '@angular/core';
import { Books } from '../../models/book.model';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() book!: Books;


}
