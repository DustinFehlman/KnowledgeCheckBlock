import React from 'react';

function Image(props) {
    const height = props.height || "100%";
    const width = props.width || "100%";
    return <img src={props.src} height={height} width={width} alt={props.alt}/>
}

export default Image;