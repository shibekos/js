const Node = require('./node');

class LinkedList {
	
    constructor() {
      this.length = 0;
      this._tail = null;
      this._head = null;
    }

    append(data) {
      var newNode = new Node(data);
      if(this.isEmpty) {
      	this._head = newNode;
      	this._tail = newNode;
      }

     else {
     	this._tail.next = newNode;
        newNode.prev = this._tail;
        this._tail = node;
     }
        this.length++;
        return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this.tail.data;
    }

    at(index) {
     var currentnode = this._head,
      for (var i = 0; i <= index; i++) {
        if (i > 0) {
          currentNode = currentNode.next;
        }
       }
        return currentNode.data;
    }

    insertAt(index, data) {
      var newNode = new Node(data);
      var current = this.find(index);
      newNode.next = current.next;
      newNode.prev = current;
      current.next = newNode;
    }

    isEmpty() {
      if (this.length == 0) {
      	return true;
      } else {
      	return flase;
      }
    }

    clear() {
      this.length = 0;
      this._head.data = null;
      this._head.next = null;
      this._tail.data = null;
      this._tail.prev = null;
      return this;
    }

    deleteAt(index) {
      var currNode = this.find(index);
      if (!(currNode.next == null)) {
      Doubly Linked Lists | 83
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      currNode.next = null;
      currNode.prev = null;
    }

    reverse() {
      var currNode = this.head;
      currNode = this.findLast();
      while (!(currNode.previous == null)) {
      print(currNode.element);
      currNode = currNode.previous;
    }
}

    indexOf(data) {
      var currentnode = this._head;
      if (!this.isEmpty()) {
        for (var i = 0; i < this.length; i++) {
          if (currentnode.data == data) {
            return i;
          }
          currentnode = currentnode.next;
        }
        return -1;
       }
     }
}

module.exports = LinkedList;
