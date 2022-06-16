import { MouseEvent, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { StyledButton, StyledDicesContainer, StyledMain, StyledScore } from '../styles/styles';
import Dice from './Dice';

type TDice = {
    value: number,
    held: boolean,
    id: number,
}

const GameWindow = () => {
    const [dices, setDices] = useState<TDice[]>(allNewDice());
    const [tenzies, setTenzies] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const { width, height} = useWindowDimensions();

    useEffect(() => {
        const firstValue = dices[0].value;
        const allHeld = dices.every(dice => dice.held);
        const allSameNumber = dices.every(dice => dice.value === firstValue);

        if (allHeld && allSameNumber) setTenzies(true);
    }, [dices])

    function randomDiceValue() {
        return Math.ceil(Math.random() * 6)
    };

    function allNewDice() {
        const newArray = [];

        for(let i = 0; i < 10; i++) {
            const newDice: TDice = {
                value: randomDiceValue(),
                held: false,
                id: i + 1
            };

            newArray.push(newDice);
        };

        return newArray;
    };

    function handleClick() {
        if (!tenzies) {
            setDices(prevDices => prevDices.map(dice => 
                dice.held ? 
                    dice 
                    : {...dice, value:randomDiceValue()}
            ));
            setScore(prevScore => prevScore + 1);
        } else {
            setDices(allNewDice());
            setTenzies(false);
            setScore(0);
        };
    };

    function holdDice(id: number) {
        if (!tenzies) {
            setDices(prevDices => prevDices.map(dice =>
                dice.id === id ? 
                    {...dice, held: !dice.held} 
                    : dice
            ))
        }    
    };

    const diceElements = dices.map(dice =>
        <Dice key={dice.id} {...dice} hold={() => holdDice(dice.id)}>{dice.value}</Dice>
    );

    return (
        <>
            {tenzies && <Confetti width={width} height={height} />}
            <StyledMain tenzies={tenzies} >
                <StyledScore tenzies={tenzies} >{`Your score: ${score}`}</StyledScore>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <StyledDicesContainer tenzies={tenzies} >
                    {diceElements}
                </StyledDicesContainer>
                <StyledButton onClick={handleClick}>
                    {tenzies ? 'Reset game' : 'Roll'}
                </StyledButton>
            </StyledMain>
        </>
    );
};

export default GameWindow;