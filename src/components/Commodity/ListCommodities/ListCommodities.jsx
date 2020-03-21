import React from 'react';

const ListCommodities = props => {
    let liElements;
    
    if (props.error) {
        return props.error.message;
    } else if (!props.comIsLoaded) {
        return "Загрузка...";
    } else {

        liElements = props.commodities.forEach(item => {
            return (
                <li id={item.code} key={item.uuid}>
                    {item.label}
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