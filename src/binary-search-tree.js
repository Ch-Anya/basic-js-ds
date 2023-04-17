const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Start {
  constructor(data) {
      this.data=data;
      this.left=null;
      this.right=null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root=null;
  }


  root() {
    if (!this.root) {
      return;
    }
    else {
      let node=this.root;
      return node;
    }
  }

  add(data) {
    this.root = add2(this.root, data);
    function add2(node, data) {
        if (node==null) {
            return new Start(data);
        }
        if (node.data===data) {
            return node;
        }
        if (data>node.data) {
            node.right=add2(node.right, data);
        }
        else {
            node.left=add2(node.left, data)
        }
        return node;
    }
  }

  has(data) {
    return search(this.root, data);
    function search(node, data) {
        if (node==null) {
            return false;
        }
        if (node.data===data) {
            return true;
        }
        return data<node.data ?
        search(node.left, data) :
        search(node.right, data);
    }
  }

  find(data) {
    return find2(this.root, data);
    function find2(node, data) {
        if (node==null) {
            return null;
        }
        if (node.data===data) {
            return node.data;
        }
        return data<node.data ?
        find2(node.left, data) :
        find2(node.right, data);
    }
  }

  remove(data) {
    this.root=remove2(this.root, data);
    function remove2(node, data) {
        if (node==0) {
            return null;
        }
        if (data<node.data) {
            node.left=remove2(node.left, data);
            return node;
        }
            else if (node.data<data) {
                node.right=remove2(node.right, data);
                return node;
            }
            else {
                if (node.left==null && node.right==null) {
                    return null;
                }
                if (node.left==null) {
                    node=node.right;
                    return node;
                }
                if (node.right==null) {
                    node=node.left;
                    return node;
                }
                let minRight=node.right;
                while (minRight.left) {
                    minRight=minRight.left;
                }
                node.data=minRight.data;
                node.right=remove2(node.right, minRight.data);
                return node;
            }
    }
  }

  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while(node.left) {
      node=node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.right) {
      node=node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};