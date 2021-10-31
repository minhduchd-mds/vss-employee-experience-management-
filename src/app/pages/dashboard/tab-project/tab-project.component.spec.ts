import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProjectComponent } from './tab-project.component';

describe('TabProjectComponent', () => {
  let component: TabProjectComponent;
  let fixture: ComponentFixture<TabProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
