import React from 'react';

const Header = (props) => {

    function clickUpdate() {
        let headers = { get: "update" };
        props.receiveData(props.dataServer, headers);
    }
   
    let update;

    if (props.update) {
        update = "(need update!)";
    } else if (props.update !== null) {
        update = "(updated!)";
    } else {
        update = null;
    }

    return (
        <header>
            <img src='/terminal-5.png' alt='...'></img>
            <h2>{props.title}</h2>
            <div className={props.className} onClick={() => clickUpdate()}>
                {update}
            </div>
        </header>
    );
}

export default Header;