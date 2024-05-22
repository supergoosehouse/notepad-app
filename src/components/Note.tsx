import DeleteNoteButton from "./DeleteNoteButton";
import { useNavigate } from "react-router-dom";

export interface NoteProps {
	id: string;
	date: string;
	title: string;
	content: string;
	prop: string;
}

const Note: React.FC<NoteProps> = ({ id, title, content, date }) => {
	const navigate = useNavigate();
	const openEditor = () => {
		navigate("/editor/" + id);
	}; // write function
	return (
		<div
			onClick={openEditor}
			className="note"
			style={{
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				cursor: "pointer",
			}}
		>
			<div
				className="note-title pe-none"
				style={{
					marginRight: "auto",
					maxWidth: "100%",
					textOverflow: "ellipsis",
					overflow: "hidden",
					whiteSpace: "nowrap",
				}}
			>
				{title}
			</div>
			<div
				className="note-content pe-none"
				dangerouslySetInnerHTML={{ __html: content }}
				style={{
					width: "100%",
					wordWrap: "break-word",
					height: "45%",
					overflow: "hidden",
				}}
			></div>
			<div
				className="gradient-overlay"
				style={{ width: "50%", right: 0 }}
			></div>
			<div
				className="note-date pe-none"
				style={{
					position: "absolute",
					bottom: "5px",
					right: "10px",
				}}
			>
				{date}
			</div>

			<div
				style={{
					position: "absolute",
					bottom: "5px",
					left: "5px",
					zIndex: "2",
				}}
			>
				<DeleteNoteButton id={id} />
			</div>
		</div>
	);
};

export default Note;
