import React from "react";
import { Link } from "react-router-dom";

class navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand navbar-dark bg-dark ">
				<span className="navbar-brand">
					<img
						src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/8575147831553750379-256.png"
						alt="react-logo"
						width="30"
						height="30"
						className="d-inline-block"
					/>
				</span>
				<div className="collapse navbar-collapse">
					<div
						className="navbar-nav d-flex justify-content-between"
						style={{ width: "100%" }}
					>
						<Link to="/" className="nav-item nav-link active">
							Recorrido
						</Link>

						<p className="nav-item nav-link m-0 text-white ">
							Pablo Moises Mazariegos Pinto
						</p>
					</div>
				</div>
			</nav>
		);
	}
}

export default navbar;
