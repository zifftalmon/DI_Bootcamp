import React from "react";

const Block = (props) => {
    return (
        <div>
            <p>{props.votes}</p>
            <h1>{props.name}</h1>
            <button>vote here</button>
        </div>
    )
}

export default Block