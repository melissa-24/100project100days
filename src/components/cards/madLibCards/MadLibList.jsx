

const MadLibList = ({ madLibs, onSelect }) => {
    console.log('what is madLibs', madLibs)
    return (
        <div>
            <h2>Choose a Mad Lib</h2>
            <ul>
                {madLibs.map((madLib) => (
                    <li key={madLib.id}>
                        <button onClick={() => onSelect(madLib)}>{madLib.title} ({madLib.category})</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MadLibList;