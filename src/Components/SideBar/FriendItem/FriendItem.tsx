import React from 'react';
import {NavLink} from 'react-router-dom';
import StyleSheet from './../SideBar.module.css';
import {SimpleNameObjType} from "../../../types/types";

const FriendItem: React.FC<SimpleNameObjType> = (props) => {
    return (
        <div className={StyleSheet.friendItem}>
            <img alt='icon' src='https://cdn3.iconfinder.com/data/icons/social-media-set-1-1/256/Social_Media-11-512.png'/>
            <NavLink to={'/friends/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default FriendItem;
