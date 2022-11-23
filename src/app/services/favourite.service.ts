import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, share, Subject, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';
import { InMemoryService } from './in-memory.service';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private favouritesUrl = 'api/favourites/';
  $favourites = new BehaviorSubject<Course[]>([]);
  constructor(private inMemoryService: InMemoryService, private http: HttpClient) { }

  createFavourite(course: Course): Observable<Course> {
    return this.http.post<Course>(this.favouritesUrl, course).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => console.error(error));
      })
    )
  }
  getFavourites() {
    return this.http.get<Course[]>(this.favouritesUrl).subscribe(res => this.$favourites.next(res))
  }

  removeFavourite(course: Course) {
    return this.http.delete<Course[]>(this.favouritesUrl + course.id);
  }

}
