import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsExamplesComponent } from './models-examples.component';

describe('ModelsExamplesComponent', () => {
  let component: ModelsExamplesComponent;
  let fixture: ComponentFixture<ModelsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
