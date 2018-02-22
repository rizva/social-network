import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmainComponent } from './tabmain.component';

describe('TabmainComponent', () => {
  let component: TabmainComponent;
  let fixture: ComponentFixture<TabmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
