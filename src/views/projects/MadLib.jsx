import { useState, useEffect } from 'react';
import MadLibList from '../../components/cards/madLibCards/MadLibList'
import MadLibForm from '../../components/cards/madLibCards/MadLibForm'
import MadLibResult from '../../components/cards/madLibCards/MadLibResult'
import ResetButton from '../../components/cards/madLibCards/ResetButton'
import madLibData from '../../json/dummyDB/madLib.json'

const MadLib = () => {
    const [madLibs, setMadLibs] = useState([])
    const [selectedMadLib, setSelectedMadLib] = useState(null)
    const [madLibInputs, setMadLibInputs] = useState(null)

    useEffect(() => {
        const filteredMadLibs = madLibData.filter(madLib => !madLib.is_template)
        setMadLibs(filteredMadLibs);
    }, [])

    const handleSelectMadLib = (madLib) => {
        console.log('Selected madLib:', madLib)
        setSelectedMadLib(madLib)
        setMadLibInputs(null)
    };

    const handleSubmitMadLib = (inputs) => {
        setMadLibInputs(inputs)
    };

    const handleReset = () => {
        setSelectedMadLib(null)
        setMadLibInputs(null)
    }



    return (
        <>
            {!selectedMadLib && <MadLibList madLibs={madLibs} onSelect={handleSelectMadLib} />}
            {selectedMadLib && !madLibInputs && <MadLibForm madLib={selectedMadLib} onSubmit={handleSubmitMadLib} />}
            {madLibInputs && <MadLibResult story={selectedMadLib.story} inputs={madLibInputs} />}
            {(selectedMadLib || madLibInputs) && <ResetButton onReset={handleReset} />}
        </>
    )
}

export default MadLib
