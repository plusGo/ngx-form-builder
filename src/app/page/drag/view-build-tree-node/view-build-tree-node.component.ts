import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDropList} from '@angular/cdk/drag-drop';
import {ViewBuildService} from '../view-build.service';
import {NodeModel} from '../model/node.model';
import {timer} from 'rxjs';

@Component({
  selector: 'app-view-build-tree-node',
  templateUrl: './view-build-tree-node.component.html',
  styleUrls: ['./view-build-tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBuildTreeNodeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input()
  nodeModel: NodeModel;

  @ViewChild(CdkDropList)
  dropList: CdkDropList;


  constructor(public viewBuildService: ViewBuildService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnDestroy(): void {
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
      this.viewBuildService.register(this.nodeModel);
      this.changeDetectorRef.markForCheck();
    });
  }

  drop(event: CdkDragDrop<NodeModel>) {
    const beforeOrAfter = event.currentIndex === 0 ? 'before' : 'after';
    if (this.showInnerContainer() && this.isEmpty()) {
      this.viewBuildService.append(this.nodeModel, event.previousContainer.data);
    } else {
      this.viewBuildService.transform(event.previousContainer.data, this.nodeModel, beforeOrAfter);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nodeModel) {
      this.nodeModel.children = this.nodeModel.children ? this.nodeModel.children : [];
      this.nodeModel.children.forEach(child => child.parent = this.nodeModel);
    }
  }

  dragEntered($event: CdkDragEnter<NodeModel | any>) {
    console.log($event.container.data.id);
  }
}
