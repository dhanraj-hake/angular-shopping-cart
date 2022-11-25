import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopnavComponent } from './shopnav.component';

describe('ShopnavComponent', () => {
  let component: ShopnavComponent;
  let fixture: ComponentFixture<ShopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
