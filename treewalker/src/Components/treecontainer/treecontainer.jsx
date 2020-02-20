import React from "react";
import tree from "Classes/tree";

// COMPONENTS
import Graph from "Components/treegraph/treegraph";
import {
	ToastsContainer,
	ToastsStore,
	ToastsContainerPosition
} from "react-toasts";

// Instance of binaryTree
let binaryTree = new tree();

class treecontainer extends React.Component {
	constructor() {
		super();
		this.state = {
			tree: "",
			directionText: "Izquierda a Derecha",
			direction: "izq"
		};
		//binding new methods
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDirection = this.handleDirection.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		// validar que se esté ingresando un valor diferente a vacio
		let Inputvalue = document.getElementById("valueInput");
		if (Inputvalue.value === "") {
			ToastsStore.error("Ingrese un valor numérico");
		} else {
			let treeState = binaryTree.addValue(Inputvalue.value);
			this.setState({
				tree: treeState
			});
			ToastsStore.success("Nodo agregado Exitosamente!");
		}

		Inputvalue.value = "";
	}

	handleDirection(event) {
		event.preventDefault();

		if (this.state.directionText === "Izquierda a Derecha") {
			this.setState({
				directionText: "Derecha a Izquierda",
				direction: "der"
			});
		} else {
			this.setState({
				directionText: "Izquierda a Derecha",
				direction: "izq"
			});
		}

		ToastsStore.info("Recorridos de " + this.state.directionText);
	}

	render() {
		console.log(binaryTree.PrimeroAnchura());
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row mt-3">
						<div className="col-md-12">
							<form className="form-inline" onSubmit={this.handleSubmit}>
								<input
									id="valueInput"
									type="number"
									placeholder="Valor"
									className="form-control form-control-sm mr-2"
								/>

								<button className="btn btn-success btn-sm my-2 my-sm-0 mr-4">
									Agregar
								</button>

								<button className="btn btn-primary btn-sm mr-2">
									Primero Anchura
								</button>

								<button className="btn btn-warning btn-sm mr-2">
									Primero Profundidad
								</button>

								<button
									className="btn btn-outline-dark btn-sm mr-2"
									onClick={this.handleDirection}
								>
									{this.state.directionText}
								</button>
							</form>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-md-6">
							<Graph data={this.state.tree} />
						</div>
						<div className="col-md-6" id="steps-tree"></div>
					</div>

					<ToastsContainer
						position={ToastsContainerPosition.TOP_RIGHT}
						store={ToastsStore}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default treecontainer;
