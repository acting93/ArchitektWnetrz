import React from 'react';
import Element from './Element'
const Pakiet = (props) => {
    const information = props.value.map(item => <Element key={item.id} id={item.id} name={item.name} prize={item.cena} description={item.opis} /> )
    return ( 
        <>
        {information}
        </>  
     );
}
 
export default Pakiet;

 
