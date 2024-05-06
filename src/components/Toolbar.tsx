import React from "react";

const Toolbar = () => {
	return (
		<>
			<div
				style={{
					width: "100%",
					alignContent: "center",
				}}
			>
				<div
					className="rounded-3"
					style={{
						width: "300px",
						height: "40px",
						border: "1px solid black",
						position: "absolute",
						bottom: 0,
						marginBottom: "50px",
						marginLeft: "auto",
						marginRight: "auto",
						margin: "0 auto",
					}}
				></div>
			</div>
		</>
	);
};

export default Toolbar;
// use props to pass down the position
