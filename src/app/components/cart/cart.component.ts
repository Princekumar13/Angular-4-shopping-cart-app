import { Component,Output,EventEmitter,Input,OnInit } from '@angular/core';
import { SharedService } from '../../services/product.service';
import { CartItem } from '../../classes/cart';



@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html', 
    styleUrls: ['./cart.component.css'], 
})

export class cartComponent implements OnInit  {
    
    data:CartItem[] = [];
    cartItem:CartItem[]=[];
   
    constructor(
        private _sharedService: SharedService) {}

    ngOnInit():any {
        //this.data = this._sharedService.getSharedValue();
        this.cartItem=this._sharedService.getSharedValue();  
    }
    
    
    delete(v,index){
        this.cartItem.splice(index,1);
    }
    adding(p,input){
        for (let i = 0; i < this.cartItem.length; i++) {
            if(this.cartItem[i].product.Id == p) {

                if(this.cartItem[i].quantity < this.cartItem[i].product.allowed && input) {
                    this.cartItem[i].quantity=parseInt(input);
                    this.cartItem[i].quantity = this.cartItem[i].quantity + 1;
                    return;
                }  
            }
        }
    }

    minmax(value, max,min,val) {

        if(parseInt(value) < min || isNaN(parseInt(value))){
            return val; 
        }

        else if(parseInt(value) >= max){ 
            return max; 
        }

        else {
            return value;
        }
    }

    onlyNumberKey(event) {
        const pattern = /[1-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
    }

    subtracting(p:number){
        for (let i = 0; i < this.cartItem.length; i++) { 
            if(this.cartItem[i].product.Id == p) {  
                this.cartItem[i].quantity = this.cartItem[i].quantity - 1;
                    return; 
            }   
        }  
    }

    getTotal(){
        var total=0;
        this.cartItem.forEach( function(p){	
                total+= p.product.price*p.quantity;
        });
    
        return total;
    }

}
