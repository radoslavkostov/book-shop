import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  books?: Book[];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }


  retrieveBooks(bookName: string): void {
    this.bookService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.books = data.filter(b => b.title?.includes(bookName));
    });
  }
}
