import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PDFDocumentProxy, PdfViewerModule } from 'ng2-pdf-viewer';
import { BookService } from './book.service';
import { Books } from '../../shared/models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [PdfViewerModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  pdfSrc?: string;
  pageVariable: number = 1;
  totalPage!: number;
  bookId!: string;
  selectedBook?: Books;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.selectedBook = this.bookService.getBookById(this.bookId);
    this.pdfSrc = this.selectedBook?.pdfURL;
    // console.log(this.activatedRoute.snapshot)
  }

  afterLoadComplete(pdf: PDFDocumentProxy) {
    console.log('PDF loaded: ', pdf);
    this.totalPage = pdf.numPages;
  }
}
