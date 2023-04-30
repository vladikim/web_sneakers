import React from "react";
function Drawer() {
    return <div className='overLay' >
        <div className='drawer'>
            <div className='cartTop'>
                <h2>Корзина</h2>
                <button >
                    <img src='img/cancel.svg' />
                </button>
            </div>

            <div className='allCart'>
                <div className='cartItems'>
                    <div className='sneakersCard1'>
                        <img src='img/sneakers2.jpg' width={70} />
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999p</b>
                        </div>
                        <button> <img src='img/cancel.svg' /> </button>

                    </div>
                </div>



                <div className='cartItems'>
                    <div className='sneakersCard1'>
                        <img src='img/sneakers2.jpg' width={70} />
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999p</b>
                        </div>
                        <button> <img src='img/cancel.svg' /> </button>
                    </div>
                </div>

                <div className='cartItems'>
                    <div className='sneakersCard1'>
                        <img src='img/sneakers2.jpg' width={70} />
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12999p</b>
                        </div>
                        <button> <img src='img/cancel.svg' /> </button>
                    </div>
                </div>

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
                <button>
                    <p>Оформить заказ</p>
                </button>
            </div>

        </div>
    </div>
}
export default Drawer