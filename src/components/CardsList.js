import React from "react";
import Card from './Card';

const CardsList = ({robots}) => {
    const cardsArray = robots.map((user,i) =>{
        return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id}/>
    })

    return (
        <div>
            {cardsArray}
        </div>
    )   
}

export default CardsList;