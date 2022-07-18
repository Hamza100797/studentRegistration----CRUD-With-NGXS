import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPopComponent } from './model-pop.component';

describe('ModelPopComponent', () => {
  let component: ModelPopComponent;
  let fixture: ComponentFixture<ModelPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
