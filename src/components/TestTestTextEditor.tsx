import React, { ChangeEvent, useState } from "react";

const TestTestTextEditor = () => {
	const [text, setText] = useState("");

	const onTextChange = (event: ChangeEvent<HTMLDivElement>) => {
		if (event.target.innerHTML) {
			setText(event.target.innerHTML);
			console.log("it works!");
		}
	};
	return (
		<div
			style={{ width: "300px", height: "100px" }}
			contentEditable="true"
			onInput={onTextChange}
			dangerouslySetInnerHTML={{ __html: text }}
		></div>
	);
};

export default TestTestTextEditor;
