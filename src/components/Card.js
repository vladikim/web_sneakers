import React from "react";
import './index.scss'
import { AppContext } from "./App";

function Card({ img, price, title, idd, }) {
    const { isAddedOrNot } = React.useContext(AppContext)
    const { addItemsInFavorite } = React.useContext(AppContext)
    const { inCart } = React.useContext(AppContext)
    const { isFavorited } = React.useContext(AppContext)


    const onClickPlus = () => {
        inCart({ img, price, title, idd })
        isAddedOrNot(idd)
    }

    function addFavorite() {
        addItemsInFavorite({ img, price, title, idd })
        isFavorited(idd)

    }

    return <div className='card' >
        <div className='favorite' onClick={addFavorite}>
            <img src={isFavorited(idd) ? 'img/heart-like.svg' : 'img/heart-dis.svg'} />
        </div>
        <img src={img} width={133} height={112} />
        <h5>{title}</h5>
        <div className='d-flex-between'>
            <div className='d-flex'>
                <span>Цена:</span>
                <b>{price} руб</b>
            </div>
            <button className='buttonPlus' onClick={onClickPlus}>
                <img src={isAddedOrNot(idd) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'} alt='plus' />
            </button>
        </div>
    </div>
}
export default Card