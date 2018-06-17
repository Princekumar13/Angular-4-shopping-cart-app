import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { cartComponent } from './components/cart/cart.component';
import { userLoginComponent } from './components/user-login/user-login.component';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { SharedService } from './services/product.service';
import { AuthGuard } from './services/Authguard.service';
import { ModelsExamplesComponent } from './components/models-examples/models-examples.component';
import { dynamicComponent } from './components/dynamic-modal/dynamic-model.component';

const appRoute:Routes=[
       { path:'' , component:MyProductsComponent,  },
       { path:'cartlist' , component:cartComponent, canActivate: [AuthGuard] },
       { path:'login' , component:userLoginComponent  },
       { path:'modals-examples' , component:ModelsExamplesComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,cartComponent ,userLoginComponent, MyProductsComponent,
    ModelsExamplesComponent,dynamicComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),FormsModule,
  ],
  providers: [SharedService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
