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

  public addBookToCart(book: Book): void {

    let listBook: Book[] = JSON.parse(
      localStorage.getItem('listCartBook') || '[]'
    );

    if (listBook.length === 0) {
      book.amount = 1;
      listBook = [book];

    } else {

      const index = listBook.findIndex(
        (item: Book) => item.id === book.id
      );

      if (index !== -1) {
        listBook[index]!.amount =
          (listBook[index]!.amount || 0) + 1;

      } else {
        book.amount = 1;
        listBook.push(book);
      }
    }

    localStorage.setItem(
      'listCartBook',
      JSON.stringify(listBook)
    );
  }

}