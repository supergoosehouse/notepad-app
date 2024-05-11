import React, { ChangeEvent, useState } from "react";

const TestTextEditor = () => {
	const [text, setText] = useState("");

	const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
		console.log("it WORKS!");
	};

	return <textarea value={text} onChange={onTextChange}></textarea>;
};

export default TestTextEditor;
