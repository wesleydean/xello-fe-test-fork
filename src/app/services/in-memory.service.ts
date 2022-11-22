import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  createDb() {
    return of({
      products: [
        {
          id: 1,
          name: 'The Complete Management Skills Certification Course',
          price: 29.99,
          description:
            'Used at Amazon®, Unilever®, Walmart®, and other top firms. Learn leadership, productivity, communication skills & more!',
        },
        {
          id: 2,
          name: 'Business Development For Startups and Tech Companies',
          price: 199,
          description:
            'Unlock massive growth using the business development channel. Learn pitching, BD strategy, cold emailing, & deal closing',
        },
        {
          id: 3,
          name: 'SQL Masterclass: SQL for Data Analytics',
          price: 29.99,
          description:
            'SQL course covering basic to advanced SQL topics for SQL Database (PostgreSQL). Beginner friendly SQL training',
        },
        {
          id: 4,
          name: 'Angular - The Complete Guide (2023 Edition)',
          price: 59.99,
          description:
            'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
        },
        {
          id: 5,
          name: 'Angular & NodeJS - The MEAN Stack Guide [2023 Edition]',
          price: 35.99,
          description:
            'Learn how to connect your Angular Frontend to a NodeJS & Express & MongoDB Backend by building a real Application',
        },
      ],
      locale: 'en-ca',
      favourites: [],
    });
  }
}
