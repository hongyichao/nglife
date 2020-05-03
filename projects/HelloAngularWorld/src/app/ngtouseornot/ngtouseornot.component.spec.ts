import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtouseornotComponent } from './ngtouseornot.component';

describe('NgtouseornotComponent', () => {
  let component: NgtouseornotComponent;
  let fixture: ComponentFixture<NgtouseornotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtouseornotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtouseornotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
