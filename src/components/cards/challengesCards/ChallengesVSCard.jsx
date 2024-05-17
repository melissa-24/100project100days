import { Link } from 'react-router-dom'
import styled from 'styled-components';

// Styled components
const Number = styled.span`
  font-weight: ${(props) => (props.isHigher ? 'bold' : 'normal')};
  color: ${(props) => (props.isHigher ? 'green' : 'red')};
`;

const ChallengesVSCard = ({one, two, countOne, countTwo}) => {

    console.log('params', one, two, countOne, countTwo)

    return (
        <>
            <h2>{ one } VS { two }</h2>
            <h3>
                <Number isHigher={countOne > countTwo}>
                    {countOne}
                </Number> 
                <span> VS </span>
                <Number isHigher={countTwo > countOne}>
                    {countTwo}
                </Number></h3>
        </>
    )
}

export default ChallengesVSCard