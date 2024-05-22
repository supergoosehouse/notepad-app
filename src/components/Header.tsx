import React from "react";
import BurgerMenu from "./BurgerMenu";
import LogoButton from "./LogoButton";

const Header = () => {
	return (
		<>
			<div
				style={{
					height: "50px",
					background: "#e3e3e3",
					border: "var(--bs-border-width) solid var(--bs-border-color)",
					verticalAlign: "center",
					zIndex: "9999",
					top: "0",
					left: "0",
					width: "100%",
					position: "fixed",
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<div
					style={{
						position: "absolute",
						left: "5px",
						top: "5px",
						height: "40px",
					}}
				>
					<LogoButton
						stylesList={{ height: "40px", draggable: "false" }}
					></LogoButton>
				</div>
				<BurgerMenu></BurgerMenu>
			</div>
		</>
	);
};

export default Header;
