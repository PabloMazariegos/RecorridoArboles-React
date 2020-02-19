import React from "react";
import { Graphviz } from "graphviz-react";

import "./treegraph.css";

const treegraph = props => (
	<Graphviz
		dot={`digraph {
			10 -> 5;
			10 -> 25;
			25 -> 15;
			25 -> 30;

			10 [style=filled color=dodgerblue3];
			25 [style=filled color=dodgerblue3];
			15 [style=filled color=dodgerblue3];
		}`}
	/>
);

export default treegraph;
