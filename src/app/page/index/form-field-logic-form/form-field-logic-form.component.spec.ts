import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLogicFormComponent } from './form-field-logic-form.component';

describe('FormFieldLogicFormComponent', () => {
  let component: FormFieldLogicFormComponent;
  let fixture: ComponentFixture<FormFieldLogicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldLogicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldLogicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
