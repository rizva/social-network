import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabprofileComponent } from './tabprofile.component';

describe('TabprofileComponent', () => {
  let component: TabprofileComponent;
  let fixture: ComponentFixture<TabprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
