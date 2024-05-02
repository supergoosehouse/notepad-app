import React from "react";

//Todo: https://getbootstrap.com/docs/4.0/components/dropdowns/
const BurgerMenu = () => {
	return (
		<>
			<div
				className="dropdown"
				style={{
					float: "right",
					marginRight: "15px",
				}}
			>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Dropdown button
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default BurgerMenu;
