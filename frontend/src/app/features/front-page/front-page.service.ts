import { Injectable } from "@angular/core";
import { sample_books } from "../../data/sample_books";

@Injectable({
    providedIn: 'root'
})

export class FrontPageService{

    get getBooks() {
        return sample_books
    }
}