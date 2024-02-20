import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOrSettingComponent } from './shop-or-setting.component';

describe('ShopOrSettingComponent', () => {
  let component: ShopOrSettingComponent;
  let fixture: ComponentFixture<ShopOrSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopOrSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopOrSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
