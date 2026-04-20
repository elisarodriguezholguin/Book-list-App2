import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component"
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Home component',()=>{
    let component:HomeComponent;
    let fixture:ComponentFixture<HomeComponent>
})
foreEach(() =>{
    TestBed.configureTestingModule({
    imports:[
        HttpClientTestingModule
    ],
    declarations:[

    ],
    providers:[

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    
   }).compileComponents()
   })
