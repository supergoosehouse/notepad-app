import React from "react";

const Toolbar = () => {
	return (
		<div
			style={{
				width: "500px",
				height: "40px",
				border: "5px solid black",
				position: "absolute",
				bottom: 0,
				marginTop: "auto",
				marginBottom: "50px",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		></div>
	);
};

export default Toolbar;
// use props to pass down the position
