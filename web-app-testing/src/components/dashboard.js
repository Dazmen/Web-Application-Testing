import React from 'react';

const Dashboard = (props) => {
    const {balls, setBalls, strikes, setStrikes} = props;

    const strike = () => {
        if(strikes === 2){
            setStrikes(0);
            setBalls(0);
        } else {
            setStrikes(strikes + 1);
        };
    };

    const ball = () => {
        if(balls === 3){
            setBalls(0);
            setStrikes(0);
        } else {
            setBalls(balls + 1)
        };
    };

    const foul = () => {
        if(strikes < 2){
            setStrikes(strikes + 1)
        };
    };

    const hit = () => {
        setBalls(0);
        setStrikes(0);
    };

    return(
        <div>
            <button onClick={strike} data-testid="btnStrike">Strike</button>
            <button onClick={ball} data-testid="btnBall">Ball</button>
            <button onClick={foul} data-testid="btnFoul">Foul</button>
            <button onClick={hit} data-testid="btnHit">Hit</button>
        </div>

    )
}

export default Dashboard