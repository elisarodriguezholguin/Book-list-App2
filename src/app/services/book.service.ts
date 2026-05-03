import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  addMockToCart(book: Book) {
      throw new Error("Method not implemented.");
  }

  constructor(
    @Inject(HttpClient) private readonly httpClient: HttpClient
  ) { }

  public getBooks(): Observable<Book[]> {
    const url = environment.API_REST_URL + '/book';
    return this.httpClient.get<Book[]>(url);
  }

  public getBooksFromCart(): Book[] {
    return JSON.parse(localStorage.getItem('listCartBook') || '[]');
  }

  public removeBooksFromCart(): void {
    localStorage.removeItem('listCartBook');
  }

 

}