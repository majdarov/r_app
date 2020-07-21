import React from 'react';
import s from '../Commodity.module.css';

const ListCommodities = props => {
    let liElements;
    let commodities = props.commodities;

    function liClick(e) {
        let div = document.getElementsByClassName(s.form_commodity)[0];
        let form = document.forms.form;
        let element = e.target;
        form.commodity_name.value = element.innerText;
        div.hidden = false;
    }

    if (props.error) {
        return props.error.message;
    } else if (!props.comIsLoaded) {
        return "Загрузка...";
    } else {
        liElements = commodities.map(item => {
            return (
                <li id={item.code} key={item.uuid} onDoubleClick={liClick}>
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