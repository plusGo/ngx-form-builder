import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiledSchemaFormComponent } from './form-filed-schema-form.component';

describe('FormFiledSchemaFormComponent', () => {
  let component: FormFiledSchemaFormComponent;
  let fixture: ComponentFixture<FormFiledSchemaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiledSchemaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiledSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
