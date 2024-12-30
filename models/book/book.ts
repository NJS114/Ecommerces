import { TransactionType } from "../Enums";

export class Book {
    id: string;
    barcode: string;
    title: string;
    author: string;
    synopsis: string;
    edition: string;
    publicationDate: Date;
    bookCondition: number; 
    coverImagePath: string;
    additionalImagePaths: string[];
    transactionType: TransactionType; 
    category: number; 
    rentalPrice?: number; 
  
    constructor(
      id: string,
      barcode: string,
      title: string,
      author: string,
      synopsis: string,
      edition: string,
      publicationDate: Date,  // Changer ici aussi
      bookCondition: number,
      coverImagePath: string,
      additionalImagePaths: string[],
      transactionType: TransactionType,  // Mettre ici TransactionType au lieu de number
      category: number,
      rentalPrice?: number
    ) {
      this.id = id;
      this.barcode = barcode;
      this.title = title;
      this.author = author;
      this.synopsis = synopsis;
      this.edition = edition;
      this.publicationDate = publicationDate;
      this.bookCondition = bookCondition;
      this.coverImagePath = coverImagePath;
      this.additionalImagePaths = additionalImagePaths;
      this.transactionType = transactionType;
      this.category = category;
      this.rentalPrice = rentalPrice;
    }
  }
  