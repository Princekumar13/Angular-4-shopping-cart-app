import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/product.service';
import { CartItem } from '../../classes/cart';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  cartlength:CartItem[]=[];
  constructor(private _sharedService: SharedService) { }

  ngOnInit():any {
    this.cartlength = this._sharedService.getSharedValue();
  }
  
}
