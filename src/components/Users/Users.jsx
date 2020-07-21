import React from "react";
import s from "./Users.module.css";
import avatar from "../../Assets/img/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div style={{ "marginBottom": "5px" }}>
                {pages.map(p => {
                    if (!(props.pageNumber - 3 > p || p > props.pageNumber + 5) || p === pagesCount || p === 1) {
                        return <span
                            key={p}
                            className={props.pageNumber === p ? s.selected + " " + s.pages : s.pages}
                            onClick={() => props.changePage(p)}>{p}</span>
                    } else if (p === props.pageNumber + 6 || p === props.pageNumber - 4) {
                        return "...";
                    }
                    return "";
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} id={u.id} className={s.user}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img src={u.photos.small != null ? u.photos.small : avatar} alt="..." />
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed ?
                                            <button 
                                                onClick={() => props.unFollowUser(u.id)} 
                                                disabled={props.currentFollowers.some(item => item === u.id)}
                                            >UnFollow</button>
                                            : <button 
                                                onClick={() => props.followUser(u.id)} 
                                                disabled={props.currentFollowers.some(item => item === u.id)}
                                            >Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <h4>{u.name}</h4>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>
                                        <div>{"u.location.country"}</div>
                                        <div>{"u.location.city"}</div>
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Users;