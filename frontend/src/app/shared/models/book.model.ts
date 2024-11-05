export class Books {
    public id!: string;
    public bookTitle!: string; 
    public bookThumbnailURL!: string;
    public bookRating!: number;
    public bookAuthor!: string;
    constructor(id: string, bookTitle: string, bookThumbnailURL: string, bookRating: number, bookAuthor: string){
        this.id = id;
        this.bookTitle = bookTitle;
        this.bookThumbnailURL = bookThumbnailURL;
        this.bookRating = bookRating;
        this.bookAuthor = bookAuthor;
    }

}

// export class Books {
//     public id!: string;
//     public bookTitle!: string; 
//     public bookThumbnailURL!: string;
//     public bookRating!: number;
//     public bookAuthor!: string;
    
// }