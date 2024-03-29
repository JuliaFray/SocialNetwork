import React from 'react';
import StyleSheet from './../Dialogs.module.css';
import {Link} from 'react-router-dom';
import {SimpleNameObj} from "../../../types/types";

const DialogItem: React.FC<SimpleNameObj> = (props) => {
    return (
        <div className={StyleSheet.dialogItem}>
            <div>
                <img alt='dialogUser' src='https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png'/>
            </div>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>

    )
};

export default DialogItem;
