import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgisgoodComponent } from './ngisgood.component';

describe('NgisgoodComponent', () => {
  let component: NgisgoodComponent;
  let fixture: ComponentFixture<NgisgoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgisgoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgisgoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
