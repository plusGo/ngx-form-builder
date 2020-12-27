import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildTreeNodeComponent } from './view-build-tree-node.component';

describe('ViewBuildTreeNodeComponent', () => {
  let component: ViewBuildTreeNodeComponent;
  let fixture: ComponentFixture<ViewBuildTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuildTreeNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuildTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
