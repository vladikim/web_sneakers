import React from "react";
import { AppContext } from "./App";
import Info from "./info";
function Drawer({ closeCart, onRemove }) {
    const { cartItems } = React.useContext(AppContext)
    const { inCart } = React.useContext(AppContext)
    const [isOrder, setIsOrder] = React.useState(true)
    const { setCartItems } = React.useContext(AppContext)
    function handleOrder() {
        setIsOrder(!isOrder)
        setCartItems([])
        console.log(isOrder)

    }

    if (cartItems.length > 0) {
        return <div className='overLay' >
            <div className='drawer'>

                <div className='cartTop'>
                    <h2>Корзина</h2>
                    <button onClick={closeCart}>
                        <img src='img/cancel.svg' />
                    </button>
                </div>


                <div className='allCart'>
                    {cartItems.map((elem) => {
                        return <div className='cartItems'>
                            <div className='sneakersCard1'>
                                <img src={elem.img} width={70} />
                                <div>
                                    <p>{elem.title}</p>
                                    <b>{elem.price}</b>
                                </div>
                                <button onClick={() => { inCart(elem) }}> <img src='img/cancel.svg' /> </button>
                            </div>
                        </div>
                    })}
                </div>

                <div className='items'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <b>1074 руб.  </b>
                        </li>
                    </ul>
                    <button onClick={handleOrder}>
                        <p>Оформить заказ</p>
                    </button>
                </div>

            </div>
        </div>

    } else {
        return <div className='overLay' >
            <div className='drawer'>

                <div className='cartTop'>
                    <h2>Корзина</h2>
                    <button onClick={closeCart}>
                        <img src='img/cancel.svg' />
                    </button>
                </div>
                <Info title={isOrder ? 'Корзина пустая' : 'Заказ принят!'}
                    description={isOrder ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' : 'Ваш заказ #18 скоро будет передан курьерской доставке'}
                    image={isOrder ? 'img/ccc.svg' : 'img/qqq.svg'} />
            </div>
        </div>
    }


}
export default Drawer