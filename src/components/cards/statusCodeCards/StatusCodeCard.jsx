import Modal from 'react-modal'


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
        boxShadow: '0 .25em .75em #ff000075',
        margin: '1em 0',
        padding: '1em',
    },
};

Modal.setAppElement('#root')

const StatusCodeCard = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Status Code Details"
            style={customStyles}
        >
            <button onClick={onClose} className="codeClose">&times;</button>
            {data && (
                <div className='modal_details'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <img src={data.img} alt={data.title} />
                </div>
            )}
        </Modal>
    )
}

export default StatusCodeCard