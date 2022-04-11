import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

class AuthService{
    canLoad():boolean{
        return confirm("do you want to enter into lazily loaded module ?");
    }
}
export default AuthService;