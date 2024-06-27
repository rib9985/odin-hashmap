import { Node } from "./node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.index = 0;
    } else {
      this.tail.nextNode = newNode;
      newNode.previousNode = this.tail;
      newNode.index = newNode.previousNode.index + 1;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.index = 0;
    } else {
      let startNode = this.head;
      newNode.index = 0;
      startNode.previousNode = newNode;
      newNode.nextNode = startNode;
      this.head = newNode;
      while (startNode !== null) {
        startNode.index += 1;
        startNode = startNode.nextNode;
      }
    }
  }

  size() {
    let size = 1;
    let nodeToCheck = this.head;
    while (nodeToCheck.nextNode !== null) {
      size++;
      nodeToCheck = nodeToCheck.nextNode;
    }
    return size;
  }

  at(index) {
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      if (nodeToCheck.index == index) {
        return nodeToCheck;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return nodeToCheck;
  }

  getHead() {
    const head = this.head.nextNode;
    return head;
  }

  getTail() {
    let nodeToCheck = this.head;
    while (nodeToCheck.nextNode != null) {
      nodeToCheck = nodeToCheck.nextNode;
    }
    return nodeToCheck.data;
  }

  pop() {
    if (this.tail === null) {
      return;
    }

    const poppedNode = this.tail;
    this.tail = poppedNode.previousNode;
    if (this.tail !== null) {
      this.tail.nextNode = null;
    } else {
      this.head = null;
    }
    return poppedNode.data;
  }

  contains(data) {
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      if (nodeToCheck.data == data) {
        return true;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return false;
  }

  findIndex(data) {
    let nodeToCheck = this.head;
    let found = null;
    while (nodeToCheck != null) {
      if (nodeToCheck.data.key == data) {
        found = nodeToCheck.index;
        return found;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return found;
  }

  findData(key) {
    let nodeToCheck = this.head;
    let found = null;
    while (nodeToCheck != null) {
      if (nodeToCheck.data.key == key) {
        found = nodeToCheck.data;
        return found;
      }
      nodeToCheck = nodeToCheck.nextNode;
    }
    return found;
  }

  toString() {
    let initialString = "";
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      initialString += `( ${nodeToCheck.data} ) -> `;
      nodeToCheck = nodeToCheck.nextNode;
    }
    return initialString + "( null )";
  }

  dataToArray() {
    let initialArray = [];
    let nodeToCheck = this.head;
    while (nodeToCheck != null) {
      initialArray.push(nodeToCheck.data);
      nodeToCheck = nodeToCheck.nextNode;
    }
    return initialArray;
  }

  insertAt(data, index) {
    if (index < 0) {
      this.prepend(data);
      return;
    }
    const nextNode = this.at(index);
    if (!nextNode) {
      this.append(data);
      return;
    }
    const prevNode = nextNode.previousNode;
    const newNode = new Node(data, nextNode, prevNode);
    newNode.index = index;
    if (prevNode) {
      prevNode.nextNode = newNode;
    } else {
      this.head = newNode;
    }
    nextNode.previousNode = newNode;
    let nodeToUpdate = nextNode;
    while (nodeToUpdate) {
      nodeToUpdate.index += 1;
      nodeToUpdate = nodeToUpdate.nextNode;
    }
  }

  removeAt(index) {
    let indexToRemove = index;
    if (index < 0) {
      indexToRemove = 0;
    }
    const removedNode = this.at(indexToRemove);
    if (!removedNode) return;

    const prevNode = removedNode.previousNode;
    const nextNode = removedNode.nextNode;

    if (prevNode) {
      prevNode.nextNode = nextNode;
    } else {
      this.head = nextNode;
    }

    if (nextNode) {
      nextNode.previousNode = prevNode;
      let nodeToUpdate = nextNode;
      while (nodeToUpdate) {
        nodeToUpdate.index -= 1;
        nodeToUpdate = nodeToUpdate.nextNode;
      }
    } else {
      this.tail = prevNode;
    }
  }
}
