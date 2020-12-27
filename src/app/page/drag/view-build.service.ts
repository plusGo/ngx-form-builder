import {Injectable} from '@angular/core';
import {CdkDropList} from '@angular/cdk/drag-drop';
import {NodeModel} from './model/node.model';

@Injectable()
export class ViewBuildService {
  private nodes: NodeModel[] = []; // 扁平化的node
  nodeIds: string[] = [];

  public insertEmptyNode(parentNode: NodeModel): void {
    if (parentNode && parentNode.children && parentNode.children.length === 0) {
      parentNode.children = [{
        id: parentNode.id + '$emptyChild$',
        emptyCatch: true,
        type: 'item',
        parent: parentNode,
      }
      ];
    }
  }

  public deleteEmptyNode(parentNode: NodeModel): void {
    if (parentNode && parentNode.children && parentNode.children.length > 1) {
      parentNode.children = parentNode.children.filter(node => {
        if (node.emptyCatch) {
          this.unRegister(node);
          return false;
        } else {
          return true;
        }
      });
    }
  }

  register(node: NodeModel): void {
    this.unRegister(node);
    this.nodes.push(node);
    this.nodeIds.push(node.id);
    console.log(this.nodeIds);
  }

  unRegister(node: NodeModel): void {
    this.nodes = this.nodes.filter($node => $node !== node);
    // const idIndex = this.nodeIds.indexOf(node.id);
    // if (idIndex !== -1) {
    //   this.nodeIds.splice(idIndex, 1);
    // }
  }

  getAllDropList(): CdkDropList[] {
    return this.nodes.map(node => node.dropList);
  }

  getAllNodeId(): string[] {
    return this.nodes.map(node => node.id);
  }

  findNodeById(nodeId: string): NodeModel {
    return this.nodes.find(node => node.id === nodeId);
  }

  transform(originTreeNode: NodeModel, targetTreeNode: NodeModel, beforeOrAfter: 'before' | 'after'): void {
    if (originTreeNode === targetTreeNode) {
      return;
    }
    if (!targetTreeNode.parent) { // 根节点，不让拖拽了
      return;
    }

    originTreeNode.parent.children = originTreeNode.parent.children.filter(node => node !== originTreeNode);
    this.insertEmptyNode(originTreeNode.parent);

    const currentIndex = targetTreeNode.parent.children.indexOf(targetTreeNode);
    if (currentIndex !== -1) {
      targetTreeNode.parent.children.splice(beforeOrAfter === 'before' ? currentIndex : currentIndex + 1, 0, originTreeNode);
      this.deleteEmptyNode(targetTreeNode.parent);
    }

    originTreeNode.parent = targetTreeNode.parent; // 修改节点的父节点指向

  }
}
