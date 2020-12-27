import {Component, OnInit} from '@angular/core';
import {ViewBuildService} from '../view-build.service';

@Component({
  selector: 'app-view-build-tree',
  templateUrl: './view-build-tree.component.html',
  styleUrls: ['./view-build-tree.component.scss'],
  providers: [ViewBuildService]
})
export class ViewBuildTreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
