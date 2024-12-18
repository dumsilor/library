import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { FrontPageService } from './front-page.service';
import { Books } from '../../shared/models/book.model';
import { TitleComponent } from '../../shared/components/partials/title/title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CardComponent, CommonModule, TitleComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss',
})
export class FrontPageComponent implements OnInit {
  books: Books[] = [];

  constructor(
    private frontPageService: FrontPageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.books = this.frontPageService.getBooks;
  }

  onBookClicked(bookId: string) {
    this.router.navigate(['book', bookId]);
  }
}
