import { useState } from 'react'
import Modal from 'react-modal'
import Square from './Square'
import xImage from '../../../assets/x.png'
import oImage from '../../../assets/o.png'

Modal.setAppElement('#root')

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newSquares)
        if (winner) {
            setModalContent({
                message: `Winner: ${winner}`,
                image: winner === 'X' ? xImage : oImage,
            });
            setIsModalOpen(true);
        } else if (!newSquares.includes(null)) {
            setModalContent({
                message: 'It\'s a tie!',
                image: null,
            });
            setIsModalOpen(true);
        }
    }

    const handleReset = () => {
        setSquares(Array(9).fill(null))
        setIsXNext(true)
        setIsModalOpen(false)
    };

    const renderSquare = (index) => {
        return <Square value={squares[index]} onClick={() => handleClick(index)} />;
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="reset-button" onClick={handleReset}>Reset Game</button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleReset}
                contentLabel="Game Over"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>{modalContent.message}</h2>
                {modalContent.image && <img src={modalContent.image} alt="Winner" className="modal-image" />}
                <button onClick={handleReset}>Play Again</button>
            </Modal>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;
