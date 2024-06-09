import { Link } from 'react-router-dom'
import styled from 'styled-components';

// Styled components
const Number = styled.span`
  font-weight: ${(props) => (props.isHigher ? 'bold' : 'normal')};
  color: ${(props) => (props.isHigher ? 'green' : 'red')};
`;

const ChallengesVSCard = ({one, two, three, countOne, countTwo, countThree}) => {

    const countFour = countOne + countTwo
    const four = `${one} & ${two}`

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
                <h2>{ four } VS { three }</h2>
            <h3>
                <Number isHigher={countFour > countThree}>
                    {countFour}
                </Number> 
                <span> VS </span>
                <Number isHigher={countThree > countFour}>
                    {countThree}
                </Number></h3>
        </>
    )
}

export default ChallengesVSCard