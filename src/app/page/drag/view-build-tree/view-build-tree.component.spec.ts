import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildTreeComponent } from './view-build-tree.component';

describe('ViewBuildTreeComponent', () => {
  let component: ViewBuildTreeComponent;
  let fixture: ComponentFixture<ViewBuildTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuildTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuildTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
