import React from "react";
import './index.scss'

function Card() {
    return <div className='card'>
        <div className='favorite'>
            <img src='img/heart-dis.svg' />
        </div>
        <img src='img/sneakers1.jpg' alt='sneakers' width={133} height={112} />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex-between'>
            <div className='d-flex'>
                <span>Цена:</span>
                <b>12999 руб</b>
            </div>
            <button className='buttonPlus'>
                <img src='img/plus.svg' alt='plus' width={11} height={11} />
            </button>
        </div>
    </div>
}
export default Card