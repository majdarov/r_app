import React from 'react';
import {useEffect} from 'react';
import {getCommoditiesAC} from '../../../redux/commodityReduser';
// import s from './ListCommodities.module.css';

const ListCommodities = props => {
    let liElements;

    useEffect(() => {
        if (!props.comIsLoaded) {
          props.dispatch(getCommoditiesAC());
        }
      });

    if (props.error) {
        return props.error.message;
    } else if (!props.comIsLoaded) {
        return "Загрузка...";
    } else {
        
        liElements = props.commodities.map(item => {
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