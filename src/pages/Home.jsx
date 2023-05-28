import React from "react"
import Card from "../components/Card"
import { AppContext } from "../components/App"
function Home({ searchChangeValue, searchValue, }) {
    const { items } = React.useContext(AppContext)
    return (
        <div className='content'>
            <div className='search-title'>
                <h1>Все кроссовки</h1>
                <div className='search-block'>
                    <img src='img/search.svg' alt='Search' />
                    <input placeholder='Поиск' onChange={searchChangeValue} />
                </div>
            </div>

            <div className='catalog'>
                {items.filter((find) => { return find.title.toLowerCase().includes(searchValue) })
                    .map((elem) =>
                        <Card
                            idd={elem.idd}
                            key={elem.idd}
                            img={elem.img}
                            title={elem.title}
                            price={elem.price}
                        />
                    )}
            </div>
        </div>

    )
}
export default Home