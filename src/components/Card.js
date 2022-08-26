import React from "react";

const Card = ({name,email,id}) => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?120x120`} alt="Robots" />
            <div>
                <h2 className="f3">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;