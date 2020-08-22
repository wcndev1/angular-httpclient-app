import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcustomerComponent } from './insertcustomer.component';

describe('InsertcustomerComponent', () => {
  let component: InsertcustomerComponent;
  let fixture: ComponentFixture<InsertcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
