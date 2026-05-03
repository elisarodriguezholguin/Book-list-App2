import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service";
import { TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from "../models/book.model";
import { environment } from "src/environments/environment.prod";
import Swal from "sweetalert2";
import { first } from "rxjs/operators";

const listBook: Book[] = [
];
const book: Book = {
    name: '',
    author: '',
    isbn: '',
    price: 15,
    amount: 2
};




describe('BookService', () => {
    let service: BookService;
    let httpMock: HttpTestingController
    let storage: { [key: string]: string } = {};
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule

            ],
            providers: [
                BookService
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });

    });
    beforeEach(() => {
        service = TestBed.inject(BookService);
        httpMock = TestBed.inject(HttpTestingController);
        storage = [];
        spyOn(localStorage, 'getItem').and.callFake((key: string) => {
            return storage[key] ? storage[key] : null;
        });
        spyOn(localStorage, 'SetItem').and.callFake((key: String, value: string) => {
            return storage[key] = value;
        })
    });
    afterAll(() => {
        httpMock.verify()
    });
    it('should be created', () => {
        expect(service).toBeTruthy
    })

    it('getBook return a list of book and does a get method', () => {
        service.getBooks().subscribe((resp: Book[]) => {
            expect(resp).toEqual(listBook)
        })
        const req = httpMock.expectOne(environment.API_REST_URL + `/book`)
        expect(req.request.method).toBe('GET');
        req.flush(listBook);
    });


    it('getBooksFronCart return empty array when  localStorage is empty', () => {
        const listBook = service.getBooksFromCart();
        expect(listBook.length).toBe(0);
    });

    // public addBookToCart(book: Book): void {

    //  let listBook: Book[] = JSON.parse(
    //    localStorage.getItem('listCartBook') || '[]'
    //  );

    //  if (listBook.length === 0) {
    //    book.amount = 1;
    //    listBook = [book];

    //  } else {

    //   const index = listBook.findIndex(
    //     (item: Book) => item.id === book.id
    //   );

    //   if (index !== -1) {
    //    listBook[index]!.amount =
    //      (listBook[index]!.amount || 0) + 1;

    //  } else {
    //    book.amount = 1;
    //   listBook.push(book);
    // }
    // }

    // localStorage.setItem(
    //   'listCartBook',
    //   JSON.stringify(listBook));
    // }
    it('addBookToCart add a hook successfully when the list does not exists in the localStorage', () => {
        
        const toast = (
            fire:() => null
        ) as any;
        const spy1 = spyOn(Swal, 'mixim').and.callFake(() => {

 })
            let listBook = service.getBooksFromCart();
            expect(listBook.length).toBe(0);
            service.addMockToCart(book);
            listBook = service.getBooksFromCart();
            expect(listBook.length).toBe(1);
            expect(spy1).toHaveBeenCalled
        })
      It ('removeBooksFronCart removes the list from the localStorage',() =>{
         service.addMockToCart(book);
         let listBook = service.getBooksFromCart();
         expect(listBook.length).toBe(1)
         service.removeBooksFromCart();
         expect(listBook.length).toBe(0);
      })
    })

