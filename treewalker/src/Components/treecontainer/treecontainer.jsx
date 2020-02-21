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
			direction: "izq",
			recorrido: ""
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
			ToastsStore.info("Recorridos de Derecha a Izquierda");
		} else {
			this.setState({
				directionText: "Izquierda a Derecha",
				direction: "izq"
			});
			ToastsStore.info("Recorridos de Izquierda a Derecha");
		}
	}

	handleRecorrido(event, type) {
		event.preventDefault();
		let recorrido;
		switch (type) {
			case "anchura":
				document.getElementById("spinnerAnchura").style.display =
					"inline-block";
				recorrido = binaryTree.PrimeroAnchura(this.state.direction);
				break;

			case "profundidad":
				document.getElementById("spinnerProfundidad").style.display =
					"inline-block";
				recorrido = binaryTree.PrimeroProfundidad(this.state.direction);
				break;

			default:
				break;
		}

		let resetTree = this.state.tree;
		this.setState({ recorrido: "" });

		if (recorrido.length > 0) {
			let animateRecorrido = () => {
				if (recorrido.length > 0) {
					let node = recorrido.shift();
					this.setState(prevState => {
						return {
							tree:
								prevState.tree + node + " [style=filled color=dodgerblue3];\n",
							recorrido: `${prevState.recorrido}--[${node}]`
						};
					});
				} else {
					clearInterval(interval);

					setTimeout(() => {
						this.setState({
							tree: resetTree
						});
						document.getElementById("spinnerAnchura").style.display = "none";
						document.getElementById("spinnerProfundidad").style.display =
							"none";
					}, 2500);
				}
			};

			let interval = setInterval(() => {
				animateRecorrido();
			}, 2000);
		} else {
			ToastsStore.error("Arbol vacío, ingrese un valor");
		}
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

								<button
									className="btn btn-primary btn-sm mr-2"
									onClick={e => {
										this.handleRecorrido(e, "anchura");
									}}
								>
									<span
										className="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
										id="spinnerAnchura"
										style={{ display: "none" }}
									></span>
									Primero Anchura
								</button>

								<button
									className="btn btn-warning btn-sm mr-2"
									onClick={e => {
										this.handleRecorrido(e, "profundidad");
									}}
								>
									<span
										className="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
										id="spinnerProfundidad"
										style={{ display: "none" }}
									></span>
									Primero Profundidad
								</button>

								<button
									className="btn btn-outline-dark btn-sm mr-4"
									onClick={this.handleDirection}
								>
									{this.state.directionText}
								</button>
							</form>
						</div>
					</div>

					<div className="row mt-5 justify-content-md-center">
						<div className="col-md-10" id="steps-tree">
							<h3>{this.state.recorrido}</h3>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-6">
							<Graph data={this.state.tree} />
						</div>
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
