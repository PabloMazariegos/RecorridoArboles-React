import Node from "./node";

class tree {
	constructor() {
		this.root = null;
	}

	addValue(value) {
		let GraphvizData = "";
		var newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentTree = this.root;
			while (currentTree) {
				if (parseInt(newNode.data) < parseInt(currentTree.data)) {
					if (currentTree.left === null) {
						currentTree.left = newNode;
						break;
					} else {
						currentTree = currentTree.left;
					}
				} else if (parseInt(newNode.data) > parseInt(currentTree.data)) {
					if (currentTree.right === null) {
						currentTree.right = newNode;
						break;
					} else {
						currentTree = currentTree.right;
					}
				}
			}
		}

		let setGraphvizData = node => {
			if (node) {
				if (node.left) GraphvizData += `${node.data} -> ${node.left.data};\n`;
				if (node.right) GraphvizData += `${node.data} -> ${node.right.data};\n`;

				setGraphvizData(node.left);
				setGraphvizData(node.right);
			}
		};

		setGraphvizData(this.root);
		if (GraphvizData === "") {
			GraphvizData += `${this.root.data};`;
		}

		return GraphvizData;
	}

	levelTraverse() {
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

				search(node.right, level + 1, rightIndex);
				search(node.left, level + 1, leftIndex);
			} else {
				return null;
			}
		};

		search(this.root, 1, 1);

		return array;
	}
}

export default tree;
