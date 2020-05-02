import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgisbadComponent } from './ngisbad.component';

describe('NgisbadComponent', () => {
  let component: NgisbadComponent;
  let fixture: ComponentFixture<NgisbadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgisbadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgisbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
