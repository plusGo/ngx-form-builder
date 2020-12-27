import {Injectable} from '@angular/core';
import {NodeModel} from './model/node.model';

@Injectable()
export class ViewBuildService {
  private nodes: NodeModel[] = []; // 扁平化的node
  nodeIds: string[] = [];
  root: NodeModel;

  buildEmptyNodeModel(parent: NodeModel): NodeModel {
    return {
      id: '$empty$',
      type: 'item',
      parent: parent,
    };
  }

  register(node: NodeModel): void {
    this.unRegister(node);
    this.nodes.push(node);

    this.recursionAction(this.root, node => {
      debugger
      if (!node.parent) {
        node.level = 0;
        return;
      }
      node.level = node.parent.level++;
    });

    this.nodes.sort((x, y) => x.level - y.level);
    this.nodeIds.splice(0, this.nodeIds.length, ...this.nodes.map(node => node.id));
    console.log(`register a new node:${node.id}`, `${JSON.stringify(this.nodeIds)}`);
  }

  recursionAction(node: NodeModel, action: (node: NodeModel) => void): void {
    action(node);
    if (node && node.children) {
      node.children.forEach($node => this.recursionAction($node, action));
    }
  }

  unRegister(node: NodeModel): void {
    this.nodes = this.nodes.filter($node => $node !== node);
  }

  append(parentNode: NodeModel, originNode: NodeModel): void {
    originNode.parent.children = originNode.parent.children.filter(node => node !== originNode);
    originNode.parent = parentNode; // 修改节点的父节点指向

    parentNode.children.push(originNode);
  }

  transform(originNode: NodeModel, targetNode: NodeModel, beforeOrAfter: 'before' | 'after'): void {
    if (originNode === targetNode) {
      return;
    }
    if (!targetNode.parent) { // 根节点，不让拖拽了
      return;
    }

    originNode.parent.children = originNode.parent.children.filter(node => node !== originNode);

    const currentIndex = targetNode.parent.children.indexOf(targetNode);
    if (currentIndex !== -1) {
      targetNode.parent.children.splice(beforeOrAfter === 'before' ? currentIndex : currentIndex + 1, 0, originNode);
    }
    originNode.parent = targetNode.parent; // 修改节点的父节点指向
  }
}
