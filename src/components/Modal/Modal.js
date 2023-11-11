import ReactModal from "react-modal";

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'ffffff'
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		marginRight: '-10%',
		border: 'none',
		background: 'ffffff',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '15px',
		outline: 'none',
		padding: '15px',
	},
};

ReactModal.setAppElement('#root');

export const Modal = ({modalIsOpen, onCloseModal, largeImageURL, tags}) => {
	return (
		<ReactModal
			isOpen={modalIsOpen}
			onRequestClose={onCloseModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<img src={largeImageURL} alt={tags}></img>
		</ReactModal>
	);
};