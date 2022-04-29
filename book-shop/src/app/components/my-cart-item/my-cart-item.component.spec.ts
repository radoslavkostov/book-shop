import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartItemComponent } from './my-cart-item.component';

describe('MyCartItemComponent', () => {
  let component: MyCartItemComponent;
  let fixture: ComponentFixture<MyCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
