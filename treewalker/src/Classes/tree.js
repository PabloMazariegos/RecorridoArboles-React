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
				} else {
					currentTree = null; //para evitar loop infinito
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

	PrimeroProfundidad(direccion) {
		if (!this.root) return [];
		let array = [];

		let Recorrer = node => {
			if (node) {
				array.push(node.data);
				if (direccion === "der") {
					Recorrer(node.right);
					Recorrer(node.left);
				} else {
					Recorrer(node.left);
					Recorrer(node.right);
				}
			} else {
				return;
			}
		};
		Recorrer(this.root);
		return array;
	}

	PrimeroAnchura(direccion) {
		if (!this.root) return [];
		let cola = [];
		let array = [];
		let nodoActual = this.root;

		cola.push(nodoActual);
		while (cola.length > 0) {
			nodoActual = cola.shift();
			if (nodoActual) {
				array.push(nodoActual.data);
				if (direccion === "der") {
					if (nodoActual.right) cola.push(nodoActual.right);
					if (nodoActual.left) cola.push(nodoActual.left);
				} else {
					if (nodoActual.left) cola.push(nodoActual.left);
					if (nodoActual.right) cola.push(nodoActual.right);
				}
			} else {
				return;
			}
		}
		return array;
	}
}

export default tree;

/*
10 -> 5;
10 -> 25;
25 -> 15;
25 -> 30;

10 [style=filled color=dodgerblue3];
25 [style=filled color=dodgerblue3];
15 [style=filled color=dodgerblue3];
*/
