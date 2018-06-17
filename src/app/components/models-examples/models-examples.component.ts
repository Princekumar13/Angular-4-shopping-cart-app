import { Component, OnInit,ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, ComponentRef, ComponentFactory  } from '@angular/core';
import { dynamicComponent } from '../dynamic-modal/dynamic-model.component';

@Component({
  selector: 'app-models-examples',
  templateUrl: './models-examples.component.html',
  entryComponents: [dynamicComponent],
  styleUrls: ['./models-examples.component.css']
})
export class ModelsExamplesComponent implements OnInit {
  
  @ViewChild("modalcontainer", { read: ViewContainerRef }) container;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  createDynamicComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(dynamicComponent);
    let componentRef: ComponentRef<any> = this.container.createComponent(factory);
    componentRef.instance._ref = componentRef;
  }
  
  
}
