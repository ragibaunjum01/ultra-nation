import React from 'react';

const Country = (props) => {
    const {name,flag,population,region} = props.country;
    const imgStyle = {height: '70px'};
    const countryStyle = {border:'2px solid',margin:'10px'};
    
    return (
        <div style={countryStyle}>
            {/* <img src={flag} alt=""/> */}
            <h1>{name}</h1>
            <img style={imgStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;