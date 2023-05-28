import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";

function Info(props) {
    const { openCart } = React.useContext(AppContext)
    return (
        <div className='favoriteCart'>
            <div className='favEmoji'><img src={props.image} /></div>
            <div className='favText'>
                <b>{props.title} </b>
                <span>{props.description}</span>
            </div>
            <div onClick={openCart}>
                <Link to='/'><button className='favButton'>Вернуться назад</button></Link>
            </div>
        </div>
    )
}
export default Info