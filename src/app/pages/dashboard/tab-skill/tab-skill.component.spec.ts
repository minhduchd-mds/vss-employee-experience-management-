import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSkillComponent } from './tab-skill.component';

describe('TabSkillComponent', () => {
  let component: TabSkillComponent;
  let fixture: ComponentFixture<TabSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
