import { MouseEvent, ReactNode } from "react";
import { StyledDice } from "../styles/styles";

type Props = {
    children: number,
    hold: () => void,
    held: boolean,
    id: number,
}

const Dice = ({children, hold, held, id}: Props) => {
    return (
        <StyledDice id={id.toString()} onClick={hold} held={held}>
            <h2>{children}</h2>
        </StyledDice>
    );
};

export default Dice;