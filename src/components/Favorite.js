import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
import Info from "./info";

function Favorite() {
    const { favoriteItems } = React.useContext(AppContext)

    if (favoriteItems.length > 0) {
        return (
            <div className='catalog'>
                {favoriteItems.map((elem) =>
                    <Card
                        idd={elem.idd}
                        key={elem.idd}
                        img={elem.img}
                        title={elem.title}
                        price={elem.price}
                    />
                )}
            </div>
        )
    } else {
        return (
            <Info title='Закладок нет :(' description='Вы ничего не добавляли в закладки' />

        )
    }
}
export default Favorite