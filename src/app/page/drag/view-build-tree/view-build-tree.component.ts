import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ViewBuildService} from '../view-build.service';
import {CdkDropListGroup} from '@angular/cdk/drag-drop';
import {NodeModel} from '../model/node.model';

@Component({
  selector: 'app-view-build-tree',
  templateUrl: './view-build-tree.component.html',
  styleUrls: ['./view-build-tree.component.scss'],
  providers: [ViewBuildService]
})
export class ViewBuildTreeComponent implements OnInit, AfterViewInit {
  @Input()
  root: NodeModel;
  @ViewChild(CdkDropListGroup)
  cdkDropListGroup: CdkDropListGroup<any>;

  constructor(private viewBuildService: ViewBuildService) {
  }

  ngOnInit(): void {
    if (!this.root) {
      throw new Error('no data');
    }
    this.viewBuildService.root = this.root;
  }

  ngAfterViewInit(): void {
  }

}
