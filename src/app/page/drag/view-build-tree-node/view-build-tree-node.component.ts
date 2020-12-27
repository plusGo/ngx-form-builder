import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDropList} from '@angular/cdk/drag-drop';
import {ViewBuildService} from '../view-build.service';
import {NodeModel} from '../model/node.model';
import {timer} from 'rxjs';

@Component({
  selector: 'app-view-build-tree-node',
  templateUrl: './view-build-tree-node.component.html',
  styleUrls: ['./view-build-tree-node.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ViewBuildTreeNodeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input()
  nodeModel: NodeModel;

  @ViewChild(CdkDropList)
  dropList: CdkDropList;

  emptyId = `$empty$${new Date().getTime()}`;


  constructor(public viewBuildService: ViewBuildService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
    this.viewBuildService.unRegister(this.nodeModel);
  }

  ngOnInit(): void {
  }

  showInnerContainer(): boolean {
    if (this.nodeModel.simple) {
      return false;
    }
    if (this.nodeModel.type === 'container') {
      return true;
    }
  };

  isEmpty(): boolean {
    if (!this.nodeModel || !this.nodeModel.children || this.nodeModel.children.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  ngAfterViewInit(): void {
    timer().subscribe(() => {
      this.nodeModel.dropList = this.dropList;
      this.nodeModel.createdTime = new Date();
      this.viewBuildService.register(this.nodeModel);
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
  }

  drop(event: CdkDragDrop<NodeModel>, empty = false) {
    if (event.previousContainer.data.simple && this.nodeModel.simple) {
      return;
    }
    let newData = event.previousContainer.data;
    if (event.previousContainer.data.simple) {
      newData = {
        ...event.previousContainer.data,
        id: event.previousContainer.data.id + new Date().getTime(),
        simple: false,
      };
    }

    if (empty) {
      this.viewBuildService.append(this.nodeModel, newData);
      return;
    }
    const beforeOrAfter = event.currentIndex === 0 ? 'before' : 'after';

    this.viewBuildService.transform(newData, this.nodeModel, beforeOrAfter);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nodeModel) {
      this.nodeModel.children = this.nodeModel.children ? this.nodeModel.children : [];
      this.nodeModel.children.forEach(child => {
        child.parent = this.nodeModel;
      });
    }
    if (this.showInnerContainer() && this.isEmpty()) {
      this.viewBuildService.nodeIds.push(this.emptyId);
    }
  }

  dragEntered($event: CdkDragEnter<NodeModel | any>) {
    console.log($event.container.data.id);
  }
}
