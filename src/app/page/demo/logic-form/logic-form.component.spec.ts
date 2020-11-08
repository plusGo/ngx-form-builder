import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicFormComponent } from './logic-form.component';

describe('LogicFormComponent', () => {
  let component: LogicFormComponent;
  let fixture: ComponentFixture<LogicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
