import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StarService } from 'src/app/services/star.service';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {


  @Input() userId: any;
  @Input() bookId: any;

  stars!: Observable<any>;
  avgRating!: Observable<any>;

  constructor(private starService: StarService) { }

  ngOnInit() {
    this.stars = this.starService.getBookStars(this.bookId)

    this.avgRating = this.stars.pipe(map(arr => {
      const ratings = arr.map((v: any) => v.value)
      return ratings.length ? ratings.reduce((total: any, val: any) => total + val) / arr.length : 'not reviewed'
    }))
    
  }

  starHandler(value: any) {
    this.starService.setStar(this.userId, this.bookId, value)
  }


}