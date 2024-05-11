import React, {
	ChangeEvent,
	useState,
	useRef,
	useEffect,
	useLayoutEffect,
} from "react";
import Toolbar from "./Toolbar";
import { realtimeDB } from "../services/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { DatabaseReference, DataSnapshot, ref } from "firebase/database";
import { getAuth, User } from "firebase/auth";
import { onValue, set } from "firebase/database";

const TextEditor = () => {
	const { noteId } = useParams();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");

	const textEditorRef = useRef<HTMLTextAreaElement | null>(null);
	const titleEditorRef = useRef<HTMLTextAreaElement | null>(null);

	const currentUser: User | null = getAuth().currentUser;
	const userNoteRef: DatabaseReference = ref(
		realtimeDB,
		`User/${currentUser?.uid}/${noteId}`
	);
	const contentRef: DatabaseReference = ref(
		realtimeDB,
		`User/${currentUser?.uid}/${noteId}/content`
	);
	const titleRef: DatabaseReference = ref(
		realtimeDB,
		`User/${currentUser?.uid}/${noteId}/title`
	);

	const navigate = useNavigate();

	useEffect(() => {
		const onDataChange = (snapshot: DataSnapshot) => {
			const data = snapshot.val();
			if (data) {
				//if (data.content && data.content !== text) {
				//if (data.content !== text) {
				setText(data.content);
				//}
				setTitle(data.title);
			}
		};

		onValue(userNoteRef, onDataChange);

		return () => {
			onValue(userNoteRef, onDataChange);
		};
	}, []);

	//old caret effect
	// useEffect(() => {
	// 	if (textEditorRef.current) {
	// 		const selection = window.getSelection();
	// 		const range = document.createRange();
	// 		range.selectNodeContents(textEditorRef.current);
	// 		range.collapse(false); // Set caret to end of content
	// 		selection?.removeAllRanges();
	// 		selection?.addRange(range);
	// 	}
	// }, [text]);

	// useEffect(() => {
	// 	if (titleEditorRef.current) {
	// 		const selection = window.getSelection();
	// 		const range = document.createRange();
	// 		range.selectNodeContents(titleEditorRef.current);
	// 		range.collapse(false); // Set caret to end of content
	// 		selection?.removeAllRanges();
	// 		selection?.addRange(range);
	// 	}
	// }, [title]);

	const adjustTextEditorHeight = () => {
		if (textEditorRef.current) {
			textEditorRef.current.style.height = "inherit";
			textEditorRef.current.style.height = `${textEditorRef.current.scrollHeight}px`;
		}
	};
	const adjustTitleHeight = () => {
		if (titleEditorRef.current) {
			titleEditorRef.current.style.height = "inherit";
			titleEditorRef.current.style.height = `${titleEditorRef.current.scrollHeight}px`;
		}
	};

	useLayoutEffect(adjustTextEditorHeight, []);

	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		let eventHTML = event.target.value;
		set(contentRef, eventHTML);
		adjustTextEditorHeight();
	};

	const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		set(titleRef, event.target.value);
		adjustTitleHeight();
		//setTitle(event.target.value || "");
	};
	const handleKeyOnTitle = (
		event: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		console.log(event.key);
		if (event.key === "Enter" || event.key === "ArrowDown") {
			event.preventDefault();
			if (textEditorRef.current) {
				textEditorRef.current.selectionEnd = 0;
				textEditorRef.current.focus();
			}
		}
	};

	const onBackButtonClick = () => {
		navigate("/home");
	};

	return (
		<>
			<div
				id="text-editor-container"
				style={{
					height: "calc(100vh - 50px)",
					overflowY: "auto",
					scrollbarGutter: "stable",
					marginLeft: "5px",
				}}
			>
				<button
					className="btn btn-white border-black"
					style={{
						position: "absolute",
						left: 10,
						top: 60,
					}}
					onClick={onBackButtonClick}
				>
					{"<"}
				</button>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "20px",
						width: "600px",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<textarea
						placeholder="Note"
						className="form-control editor-placeholder"
						// onChange={handleTitleChange}
						ref={titleEditorRef}
						value={title}
						onKeyDown={handleKeyOnTitle}
						style={{
							boxShadow: "none",
							border: "",
							borderColor: "transparent",
							fontSize: "24px",
							marginBottom: "0px",
							resize: "none",
							overflowY: "hidden",
						}}
					></textarea>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "600px",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<textarea
						data-text="Type your note here"
						className="form-control editor-placeholder"
						ref={textEditorRef}
						value={text}
						placeholder="Type your note here"
						onChange={handleTextChange}
						style={{
							boxShadow: "none",
							border: "",
							borderColor: "transparent",
							fontSize: "18px",
							minHeight: "150px",
							marginBottom: "200px",
							resize: "none",
							overflowY: "hidden",
						}}
					></textarea>
				</div>
				<Toolbar />
			</div>
		</>
	);
};

export default TextEditor;
