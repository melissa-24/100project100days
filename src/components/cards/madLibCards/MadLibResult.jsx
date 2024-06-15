

const MadLibResult = ({ story, inputs }) => {
    const filledStory = story.replace(/\{[^}]+\}/g, (match) => inputs[match.replace(/[{}]/g, '')] || '');

    return (
        <div>
            <h2>Your Completed Mad Lib</h2>
            <p>{filledStory}</p>
        </div>
    );
};

export default MadLibResult;
