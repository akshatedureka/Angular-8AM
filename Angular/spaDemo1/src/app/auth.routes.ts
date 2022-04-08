import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
class AuthGuards{
    canActivate():boolean{
        return confirm("do you want to enter into first page ?");
    }

    canDeactivate():boolean{
        return confirm("do you want to leave second page ?")
    }

    canActivateChild():boolean{
        return confirm("do you want to enter into third child ?");
    }
}
export default AuthGuards;