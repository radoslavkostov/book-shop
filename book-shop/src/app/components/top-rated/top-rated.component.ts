import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  adventureBooks?: Book[];
  crimeBooks?: Book[];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }


  retrieveBooks(): void {
    this.bookService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.adventureBooks = data.filter(b => b.genre=='Adventure').sort((b1,b2) => b2.avg_rating!-b1.avg_rating!).splice(0,3);
      this.crimeBooks = data.filter(b => b.genre=='Crime').sort((b1,b2) => b2.avg_rating!-b1.avg_rating!).splice(0,3);
    });
  }

}
