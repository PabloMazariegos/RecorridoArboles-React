import React from "react";
import { Link } from "react-router-dom";

class navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand navbar-dark bg-dark">
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
					<div className="navbar-nav">
						<Link to="/" className="nav-item nav-link active">
							Recorrido
						</Link>

						<Link to="/config" className="nav-item nav-link">
							Configuración
						</Link>

						<Link to="/about" className="nav-item nav-link">
							Acerca de
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default navbar;
