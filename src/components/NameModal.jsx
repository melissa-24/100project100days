import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#cfcdcd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

Modal.setAppElement('#root'); // to prevent screen readers from focusing on elements outside the modal

const NameModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState(localStorage.getItem('userName') || '');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const expirationTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 hours from now
        // const expirationTime = new Date().getTime() + 1 * 60 * 60 * 1000; // 1 hour from now
        // const expirationTime = new Date().getTime() + 30 * 60 * 1000; // 30 minutes from now
        const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

        const userData = {
            name,
            expiration: expirationTime,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Enter Name Modal"
        >
            <h2>Enter your name</h2>
            <form className='modal_form' onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" value={name} onChange={handleInputChange} />
                </label>
                <button className='modal_button' type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default NameModal;
