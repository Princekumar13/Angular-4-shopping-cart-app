import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../../services/Authguard.service';


@Component({
    selector:'app-userlogin',
    templateUrl:'./user-login.component.html',
    styleUrls:['./user-login.component.css']
})

export class userLoginComponent {
    invalid:string="";
   

    constructor(private router:Router,private authservice:AuthGuard){ }
    onClickSubmit(data) {
        console.log(data.name);
        this.authservice.uname=data.name;
        this.authservice.pwd=data.password;
        this.authservice.Email=data.email;
        this.router.navigate(['/cartlist'])
     }   
}
