import { useState } from 'react';
import rockImg from '../../assets/rock.png';
import paperImg from '../../assets/paper.png';
import scissorsImg from '../../assets/scissors.png';
import lizardImg from '../../assets/lizard.png';
import spockImg from '../../assets/spock.png';

const RockPaperScissorLizardSpock = () => {

    const [p1Choice, setP1Choice] = useState('');
    const [p2Choice, setP2Choice] = useState('');
    const [result, setResult] = useState('');
    const [showChoices, setShowChoices] = useState(false);
    const [isPlayer2Computer, setIsPlayer2Computer] = useState(true);
    const [gamePlayed, setGamePlayed] = useState(false)

    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

    const handleChoice = (player, choice) => {
        if (player === 1) {
            setP1Choice(choice);
        } else {
            setP2Choice(choice);
        }
    };

    const handlePlay = () => {
        if (p1Choice) {
            if (isPlayer2Computer) {
                const randomChoice = choices[Math.floor(Math.random() * choices.length)];
                setP2Choice(randomChoice);
            }
            checkResult();
            setGamePlayed(true)
        } else {
            alert('Player 1 needs to make a choice');
        }
    };

    const checkResult = () => {
        let text = '';
        if (p1Choice === p2Choice) {
            text = `You both chose ${p1Choice}, so it ends in a tie`;
        } else if (
            (p1Choice === 'Rock' && (p2Choice === 'Scissors' || p2Choice === 'Lizard')) ||
            (p1Choice === 'Paper' && (p2Choice === 'Rock' || p2Choice === 'Spock')) ||
            (p1Choice === 'Scissors' && (p2Choice === 'Paper' || p2Choice === 'Lizard')) ||
            (p1Choice === 'Lizard' && (p2Choice === 'Paper' || p2Choice === 'Spock')) ||
            (p1Choice === 'Spock' && (p2Choice === 'Rock' || p2Choice === 'Scissors'))
        ) {
            text = 'Player 1 won';
        } else {
            text = 'Player 2 won';
        }
        setResult(text);
        setShowChoices(true);
    };

    const handleToggle = () => {
        setIsPlayer2Computer(!isPlayer2Computer);
        setP2Choice(''); // Reset Player 2 choice when toggling
    };

    const handleReset = () => {
        setP1Choice('');
        setP2Choice('');
        setResult('');
        setShowChoices(false);
        setGamePlayed(false);
    }

    return (
        <>
            <h1>Rock, Paper, Scissor, Lizard, Spock</h1>
            <label>
                <input type="checkbox" checked={isPlayer2Computer} onChange={handleToggle} />
                Player 2 is Computer
            </label>
            <div className="playerRow">
            <div className="playerButtons">
                {choices.map((choice) => (
                    <button key={choice} onClick={() => handleChoice(1, choice)}>
                        <img src={eval(`${choice.toLowerCase()}Img`)} alt={choice} />
                    </button>
                ))}
            </div>
            {!isPlayer2Computer && (
                <div className="playerButtons">
                    {choices.map((choice) => (
                        <button key={choice} onClick={() => handleChoice(2, choice)}>
                            <img src={eval(`${choice.toLowerCase()}Img`)} alt={choice} />
                        </button>
                    ))}
                </div>
            )}
            </div>
            <button onClick={handlePlay}>Duel</button>
            {showChoices && (
                <div className="displayChoice">
                    <div>
                        <h2>Player 1: {p1Choice}</h2>
                        {p1Choice && <img src={eval(`${p1Choice.toLowerCase()}Img`)} alt={p1Choice} />}
                    </div>
                    <div>
                        <h2>Player 2: {p2Choice}</h2>
                        {p2Choice && <img src={eval(`${p2Choice.toLowerCase()}Img`)} alt={p2Choice} />}
                    </div>
                </div>
            )}
            <div className="result">
                <h2>{result}</h2>
            </div>
            {gamePlayed && (
                <button onClick={handleReset}>Play Again</button>
            )}
        </>
    )
}

export default RockPaperScissorLizardSpock