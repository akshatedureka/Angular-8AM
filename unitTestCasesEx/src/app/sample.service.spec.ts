import { TestBed } from "@angular/core/testing";
import { SampleService } from "./sample.service";
fdescribe("SampleService",()=>{
    let service:SampleService;

    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(SampleService);
    });

    it("service created",()=>{
        expect(service).toBeTruthy();
    });

    it("test add function",()=>{
        expect(service.add(2,2)).toEqual(4);
    });

    it("test sub function",()=>{
        expect(service.sub(2,2)).toEqual(1);
    });

});


