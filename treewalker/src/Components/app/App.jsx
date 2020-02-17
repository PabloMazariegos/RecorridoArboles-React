import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import NavBar from "Components/navbar/navbar";
import Container from "Components/treecontainer/treecontainer";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Container} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
