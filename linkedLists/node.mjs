export class Node {
  constructor(data, nextNode, previousNode, index) {
    this.data = data || null;
    this.nextNode = nextNode || null;
    this.previousNode = previousNode || null;
    this.index = index || null;
  }
}
