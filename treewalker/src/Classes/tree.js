import Node from "./node";

class tree {
	constructor() {
		this.root = null;
	}

	/**
	 * Insert value to a tree instance
	 * @param {Number} value -value to insert
	 */
	addValue(value) {
		var newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			//logic to insert nodes in current tree
			//----------------------------------------------------------------------
			let currentTree = this.root;
			while (currentTree) {
				if (parseInt(newNode.data) < parseInt(currentTree.data)) {
					/* 
						if left child of current tree in any level is null assing the child,
						only if newNode.data is LESS than the current node.data
					*/
					if (currentTree.left === null) {
						currentTree.left = newNode;
						break;
					} else {
						currentTree = currentTree.left;
					}
				} else if (parseInt(newNode.data) > parseInt(currentTree.data)) {
					/* 
						if right child of current tree in any level is null assing the child,
						only if newNode.data is GREATER than the current node.data
					*/
					if (currentTree.right === null) {
						currentTree.right = newNode;
						break;
					} else {
						currentTree = currentTree.right;
					}
				}
			}
		}
	}

	/**
	 * Return a list of values of every level in any direction
	 * @param {String} direction -Direction of traverse, "right" , "left"
	 * @returns {String[]} - Array with the data of each level of the tree instance
	 */
	levelTraverse(direction) {
		if (!this.root) return [];
		let array = [];

		let search = (node, level, index) => {
			if (node) {
				const count = Math.pow(2, level - 1);
				if (array.length < level) {
					array.push(Array(count).fill(""));
				}
				var arr = array[level - 1];
				arr[index - 1] = node.data;
				const leftIndex = 2 * index - 1;
				const rightIndex = 2 * index;

				search(node.left, level + 1, leftIndex);
				search(node.right, level + 1, rightIndex);
			} else {
				return null;
			}
		};

		search(this.root, 1, 1);

		return array;
	}
}

export default tree;
