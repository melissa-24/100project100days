import { useState } from 'react';
import { extractFieldFromData } from '../../utils/ProjectHelper'
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
    const [p1Name, setP1Name] = useState('Guest')
    const [p2Name, setP2Name] = useState('')

    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

    const player2Names = extractFieldFromData('full_name')
    const randomName = player2Names[Math.floor(Math.random() * player2Names.length)]

    const handleChoice = (player, choice) => {
        if (player === 1) {
            setP1Choice(choice);
            setP2Name(randomName)
        } else {
            setP2Choice(choice);
        }
    };

    const handlePlay = () => {
        let player1Name = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).name : 'Guest';
        setP1Name(player1Name)
        if (player1Name === 'Guest') {
            player1Name = 'Player 1';
        }
        if (p1Choice) {
            if (isPlayer2Computer) {
                const randomChoice = choices[Math.floor(Math.random() * choices.length)];
                setP2Choice(randomChoice);
            }
            checkResult();
            setGamePlayed(true)
        } else {
            alert(`${player1Name} needs to make a choice`);
        }
    };

    console.log(p1Name, p2Name)
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
            text = `${p1Name} won`;
        } else {
            text = `${p2Name} won`;
        }
        setResult(text);
        setShowChoices(true);
    };

    const handleToggle = () => {
        setIsPlayer2Computer(!isPlayer2Computer);
        setP2Choice('');
        // setP2Name('')
    };

    const handleReset = () => {
        setP1Choice('');
        setP2Choice('');
        setResult('');
        setShowChoices(false);
        setGamePlayed(false);
        setP2Name('')
    }
    const getChoiceImage = (choice) => {
        switch (choice) {
            case 'Rock': return rockImg;
            case 'Paper': return paperImg;
            case 'Scissors': return scissorsImg;
            case 'Lizard': return lizardImg;
            case 'Spock': return spockImg;
            default: return '';
        }
    };

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
                            <img src={getChoiceImage(choice)} alt={choice} />
                        </button>
                    ))}
                </div>
                {!isPlayer2Computer && (
                    <div className="playerButtons">
                        {choices.map((choice) => (
                            <button key={choice} onClick={() => handleChoice(2, choice)}>
                                <img src={getChoiceImage(choice)} alt={choice} />
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <button onClick={handlePlay}>Duel</button>
            {showChoices && (
                <div className="displayChoice">
                    <div>
                        <h2>You, {p1Name} Chose: {p1Choice}</h2>
                        {p1Choice && <img src={getChoiceImage(p1Choice)} alt={p1Choice} />}
                    </div>
                    <div>
                        <h2>Player 2 {p2Name} Chose: {p2Choice}</h2>
                        {p2Choice && <img src={getChoiceImage(p2Choice)} alt={p2Choice} />}
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