import { TestBed } from "@angular/core/testing";
import DemoService from "./demo.service";
fdescribe("demo service test cases",()=>{
    let service:DemoService;

    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(DemoService);
    })

    it("check testing object created or not",()=>{
        expect(service).toBeTruthy();
    });

    it("check add function",()=>{
        expect(service.add(10,10)).toEqual(200);
    });




})