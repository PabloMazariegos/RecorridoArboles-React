import React from "react";
import tree from "Classes/tree";

// COMPONENTS
import Graph from "Components/treegraph/treegraph";

// Instance of binaryTree
let binaryTree = new tree();

class treecontainer extends React.Component {
	constructor() {
		super();
		this.state = {
			tree: ""
		};
		//binding new methods
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		// var to save the new value of the binaryTree
		let Inputvalue = document.getElementById("valueInput");
		let treeState = binaryTree.addValue(Inputvalue.value);
		console.log(treeState);
		this.setState({
			tree: treeState
		});

		Inputvalue.value = "";
	}

	render() {
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

								<button className="btn btn-warning btn-sm ">
									Primero Profundidad
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
				</div>
			</React.Fragment>
		);
	}
}

export default treecontainer;
