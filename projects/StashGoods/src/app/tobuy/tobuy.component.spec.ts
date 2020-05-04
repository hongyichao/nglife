import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobuyComponent } from './tobuy.component';

describe('TobuyComponent', () => {
  let component: TobuyComponent;
  let fixture: ComponentFixture<TobuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
