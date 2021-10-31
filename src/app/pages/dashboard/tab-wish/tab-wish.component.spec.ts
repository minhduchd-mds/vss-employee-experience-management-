import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWishComponent } from './tab-wish.component';

describe('TabWishComponent', () => {
  let component: TabWishComponent;
  let fixture: ComponentFixture<TabWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabWishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
