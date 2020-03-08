import React from 'react';

const Element = (props) => {
    const {name,prize,description} = props
    return ( 
    <>
        <div className="pakiet">
            <div className="pakietTitle">{name}</div>
            <p>{description}</p>
            <p className="pakietPrize">Cena: {prize} pln</p> 
        </div>
    </>
     );
}
 
export default Element;