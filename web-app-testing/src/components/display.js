import React from 'react';

const Display = ({strikes, balls}) => {
    
    return(
        <section>
            <div>
                <h2>Strikes</h2>
                <div>
                    <p>{strikes}</p>
                </div>
            </div>
            <div>
                <h2>Balls</h2>
                <div>
                    <p>{balls}</p>
                </div>
            </div>
        </section>
        
    )
}

export default Display