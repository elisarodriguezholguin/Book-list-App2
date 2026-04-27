import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BookService } from "./book.service";
import { TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Book } from "../models/book.model";
import { environment } from "src/environments/environment.prod";

const listBook: Book[] = [

{
   name:'',
   author:'',
   isbn:'',
   price:15,
   amount:2
},
 {
   name:'', 
    author:'',
   isbn:'',
   price:15,
   amount:2
   },
{
   name:'', 
   author:'',
   isbn:'',
   price:20,
   amount:1
   },

]

describe('BookService', () => {
    let service: BookService;
    let httpMock: HttpTestingController
    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule

            ],
            providers: [
                BookService
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        });

    });
    beforeEach(() => {
        service = TestBed.inject(BookService);
        httpMock = TestBed.inject(HttpTestingController);
    });
     afterAll(() =>  {
      httpMock.verify()
        });
it('should be created',()=> {
    expect(service).toBeTruthy
})
//public getBooks(): Observable<Book[]> {
 //   const url: string = environment.API_REST_URL + `/book`;
  //  return this._httpClient.get<Book[]>(url);
 // }
it ('getBook return a list of book and does a get method',()=> {
    service.getBooks().subscribe((resp:Book[])=> {
    expect(resp).toEqual(listBook)
    })
    const req = httpMock.expectOne(environment.API_REST_URL + `/book`)
    expect(req.request.method).toBe('POST');
    req.flush(listBook);
});
});