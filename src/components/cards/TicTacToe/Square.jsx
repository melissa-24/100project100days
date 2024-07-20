import xImage from '../../../assets/x.png'
import oImage from '../../../assets/o.png'

const Square = ({ value, onClick }) => {

    let image;
    if (value === 'X') {
        image = <img src={xImage} alt="X" />;
    } else if (value === 'O') {
        image = <img src={oImage} alt="O" />;
    }

    return (
        <button className="square" onClick={onClick}>
            {image}
        </button>
    );
};

export default Square;