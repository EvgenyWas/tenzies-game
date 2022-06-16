import styled from "styled-components";

export const StyledMain = styled.main<{tenzies: boolean}>`
    position: relative;
    height: 400px;
    max-width: 800px;
    background-color: whitesmoke;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & h1 {
        font-size: 40px;
        margin: 0;
        opacity: ${(props) => props.tenzies ? '0.5' : '1'};
    }

    & p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin-top: 0;
        opacity: ${(props) => props.tenzies ? '0.5' : '1'};
    }
`

export const StyledScore = styled.h1<{tenzies: boolean}>`
    position: absolute;
    z-index: 5;
    top: ${(props) => props.tenzies ? '35%' : '-100vh'};
    font-size: 80px !important;
    opacity: 1 !important;

    @media (max-width: 568px) {
        top: ${(props) => props.tenzies ? '45%' : '-100vh'};
        font-size: 45px !important;
    }
`

export const StyledDicesContainer = styled.div<{tenzies: boolean}>`
    display: grid;
    grid-template: auto auto / repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 40px;
    opacity: ${(props) => props.tenzies ? '0.5' : '1'};

    @media (max-width: 568px) {
        gap: 10px;
    }
`

export const StyledDice = styled.div<{held: boolean}>`
    grid-row: span 1;
    border-radius: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 3.57447px 3.57447px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.held ? "#59E391" : "white"};

    & h2 {
        font-size: 2em;
        font-weight: lighter;
    }
`

export const StyledButton = styled.button`
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 6px;
    background-color: #5035FF;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.18);

    &:active {
        box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
    }

    &:focus {
        outline: none;
    }
`