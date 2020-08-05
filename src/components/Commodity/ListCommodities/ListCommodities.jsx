import React from 'react';
// import s from '../Commodity.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ListCommodities = props => {
    let liElements;
    let commodities = props.commodities;

    function liClick(e) {
        let id = e.target.id;
        props.getProductId(id);
    }

    if (props.error) {
        return props.error.message;
    } else if (!props.comIsLoaded) {
        return <Preloader />
    } else {
        liElements = commodities.map(item => {
            return (
                <li id={item.uuid} key={item.uuid} onDoubleClick={liClick} data-price={item.price} data-code={item.code}>
                    {item.label} | {item.price ? item.price.toFixed(2) : '0.00'}
                </li>
            )
        })

        return (
            <>
                <ul>
                    {liElements}
                </ul>
            </>
        )
    }
}
export default ListCommodities;