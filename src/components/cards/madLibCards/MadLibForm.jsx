import { useState } from 'react';

const MadLibForm = ({ madLib, onSubmit }) => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);
    };

    // Extract the placeholders from the story
    const placeholders = madLib.story.match(/\{[^}]+\}/g);

    return (
        <div>
            <h2>Fill in the Blanks</h2>
            <h2>{madLib.title}</h2>
            <form onSubmit={handleSubmit}>
                {placeholders.map((placeholder, index) => (
                    <div key={index}>
                        <label>
                            {placeholder.replace(/[{}]/g, '')}:
                            <input
                                type="text"
                                name={placeholder.replace(/[{}]/g, '')}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MadLibForm;
