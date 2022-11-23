import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Course } from '../models/course.model';
import { InMemoryService } from './in-memory.service';


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favouritesUrl = 'api/favourites/';
  constructor(private inMemoryService: InMemoryService, private http: HttpClient) { }

  createProduct(course: Course): Observable<Course> {
    return this.http.post<Course>(this.favouritesUrl, course).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => console.error(error));
      })
    )
  }
  getFavourites(): Observable<Course[]> {
    return this.http.get<Course[]>(this.favouritesUrl);
  }

}
