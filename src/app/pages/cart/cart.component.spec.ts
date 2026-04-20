import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from 'src/app/services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'src/app/models/book.model';
///ELISAAAAAAAA 


const listBook: Book[] = [
  {
    name: '',
    author: '',
    isbn: '',
    price: 15,
    amount: 2
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 20,
    amount: 1
  },
  {
    name: '',
    author: '',
    isbn: '',
    price: 8,
    amount: 1
  }

]
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: BookService;
  ////holaaa;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        CartComponent
      ],
      providers: [
        BookService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

    }).compileComponents();
  });

  //ngOnInit():void¨{
  //...this.listCartBook = this._bookService.getBooksFromCart();
  //...this.totalPrice = this.getTotalPrice(this.listCartBook);
  //...}
  beforeEach(() => {
    
    fixture = TestBed.createComponent(CartComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(BookService)
    spyOn(service,'getBooksFromCart').and.callFake(() =>listBook)
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // public getTotalPrice(listCartBook: Book[]): number {
  //    let totalPrice = 0;
  //   listCartBook.forEach((book: Book) => {
  //     totalPrice += book.amount! * book.price!;
  //   });
  //   return totalPrice;
  // }

  it('getTotalPrice returns an amount', () => {
    const totalPrice = component.getTotalPrice(listBook);
    expect(totalPrice).toBeGreaterThan(0);
    expect(totalPrice).toBeNull();

  });
  //public onInputNumberChange(action: string, book: Book): void {
  //const amount = action === 'plus' ? book.amount! + 1 : book.amount! - 1;
  //book.amount = Number(amount);
  //this.listCartBook = this._bookService.updateAmountBook(book);
  //this.totalPrice = this.getTotalPrice(this.listCartBook);


  it('onInputNumberChange increments correctly', () => {
    const action = 'plus';
    const book = {
      name: '',
      author: '',
      isbn: '',
      price: 15,
      amount: 2
    }
    const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => []);
    const spy2 = spyOn(component, 'getTotalPrice').and.callFake(() => 0);


    expect(book.amount).toBe(2);
    component.onInputNumberChange(action, book)


    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('onInputNumberChange decrements correctly', () => {
    const action = 'minus';
    const book = {
      name: '',
      author: '',
      isbn: '',
      price: 15,
      amount: 3
    }


    const spy1 = spyOn(service, 'updateAmountBook').and.callFake(() => []);
    const spy2 = spyOn(component, 'getTotalPrice').and.callFake(() => 0);


    component.onInputNumberChange(action, book)
    expect(book.amount).toBeTrue();


    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();


  });
  //public onClearBooks(): void {
  // if (this.listCartBook && this.listCartBook.length > 0) {
  //   this._clearListCartBook();
  // } else {
  //    console.log("No books available");
  // }
  // }

  //private _clearListCartBook() {
  // this.listCartBook = [];
  //  this._bookService.removeBooksFromCart();
  // }

  //}
  it('onclearBook works correctly', () => {
    const spy1= spyOn((component as any),'_clearListCartBook').and.callThrough();
    const spy2 =spyOn(service,'removeBooksFromCart').and.callFake(()=>null);
    component.listCartBook = listBook;
    console.log(component.listCartBook.length);
    component.onClearBooks();
    console.log('after' + component.listCartBook.length);
    expect(component.listCartBook.length).toBe(0);
    expect(spy1).toHaveBeenCalled();

  });
  it('_clearListCartBook works correctly',()=> {
    const spy1 = spyOn(service,'removeBooksFromCart').and.callFake(()=>null)
  
    component ['_clearListCartBook']();
    expect(spy1).toHaveBeenCalled()
  })
});
