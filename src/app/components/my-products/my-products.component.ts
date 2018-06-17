import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/product.service';
import { Product } from '../../classes/product';


@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  Items = {
    "Shoes": [
      {
        'Id': 1,
        'dec': 'Mens sneakers Shoes',
        'price': 500,
        'url': '/assets/Images/pic1.jpeg',
        'allowed': 5,
      },

      {
        'Id': 2,
        'dec': 'Mens sneakers Shoes',
        'price': 450,
        'url': '/assets/Images/pic2.jpeg',
        'allowed': 10,
      },

      {
        'Id': 3,
        'price': 600,
        'dec': 'Mens sneakers Shoes',
        'url': '/assets/Images/pic3.jpeg',
        'allowed': 6,
      },

      {
        'Id': 5,
        'price': 2000,
        'dec': 'Mens sneakers Shoes',
        'url': '/assets/Images/pic5.jpeg',
        'allowed': 7,
      }],

    "Watches": [{
      'Id': 7,
      'price': 2000,
      'dec': 'Mens apple Watch',
      'url': '/assets/Images/pic7.jpeg',
      'allowed': 8,
    },

    {
      'Id': 6,
      'price': 1700,
      'dec': 'Mens apple Watch',
      'url': '/assets/Images/pic6.jpeg',
      'allowed': 5,
    },

    {
      'Id': 8,
      'price': 2700,
      'dec': 'Mens apple Watch',
      'url': '/assets/Images/pic8.jpeg',
      'allowed': 5,
    }]
  }


  constructor(
    private _sharedService: SharedService) { }



  ngOnInit() {

  }



  myAdd(item) {
    return this._sharedService.isAdded(item);
  }



  addData(item) {
    this._sharedService.addToCart(item);

  }



}
