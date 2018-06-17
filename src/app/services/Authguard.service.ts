import { Injectable,OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

 
@Injectable()
export class AuthGuard implements CanActivate {
    
    public uname;
    public pwd;
    public Email;
    returnUrl:string;

    constructor(private router: Router) { }
    ngOnInit(){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.uname == "angular2"  && this.pwd == "admin123" && this.Email=='prince13@gmail.com' ) {
            return true;
        }
 
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}