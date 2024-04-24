import {useState} from 'react'

const BackgroundChanger = () => {

    const [color, setColor] = useState('#ffffff'); // Initial background color

  const handleChange = (event) => {
    setColor(event.target.value);
  };

    return (
        <>
        <h3>Enter a 6 character hex code to change the background color</h3>
        <h3>Number 0-9 and Letters A-F Only</h3>
        <h3># must be in front</h3>
        <div id='bg_changer' style={{backgroundColor: color}}>
            <input type="text" value={color} onChange={handleChange} />
        </div>
        </>
    )
}

export default BackgroundChanger
