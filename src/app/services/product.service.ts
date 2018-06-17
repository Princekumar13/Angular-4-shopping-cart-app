import {Injectable} from '@angular/core';
import { CartItem } from './../classes/cart';
import { Product } from './../classes/product';

@Injectable()
export class SharedService {
    cart: CartItem[] = [];
   

    constructor(){
        
    }
  
  
    public getSharedValue() {
        return this.cart;
    }
    
    isAdded(product:Product) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.Id == product.Id){
               return true;
            }       
       }
       return false;
    }

    addToCart(product: Product) {
        let cart = new CartItem(product, 1);
        this.cart.push(cart);
    }  
    
    
    
}