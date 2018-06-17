import { Component,Input } from '@angular/core';
    
    @Component({
      selector: 'dynamic-model',
      templateUrl:'./dynamic-model.component.html',
    })

    export class dynamicComponent{
        @Input() _ref:any;

        deletemodel(){
          this._ref.destroy();
        }
    }