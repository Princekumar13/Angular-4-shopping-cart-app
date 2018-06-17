import { Component,Output,EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedService],
 
})
export class AppComponent {
  public title="Cart App";

}
