import { Injectable } from "@angular/core";
import { sample_books } from "../../data/sample_books";
import { Books } from "../../shared/models/book.model";

@Injectable({providedIn:'root'})

export class BookService {

    getBookById(id: string): Books | undefined {
        return sample_books.find(book => book.id === id)
    }
}