import React from "react";
import tree from "Classes/tree";

// Instance of binaryTree
let binaryTree = new tree();

class treecontainer extends React.Component {
	constructor() {
		super();
		this.state = {
			tree: {}
		};
		//binding new methods
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		// var to save the new value of the binaryTree
		let Inputvalue = document.getElementById("valueInput");
		binaryTree.addValue(Inputvalue.value);

		this.setState({
			tree: binaryTree
		});

		Inputvalue.value = "";
	}

	componentDidUpdate() {
		console.log(this.state.tree);
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

					<div className="row">
						<div className="col-md-6" id="graphic-tree"></div>
						<div className="col-md-6" id="steps-tree"></div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default treecontainer;
