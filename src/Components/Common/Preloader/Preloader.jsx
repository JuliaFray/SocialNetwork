import preloader from './../../../assets/Double Ring-1.9s-201px (1).svg';
import React from 'react';
import StyleSheet from './../../AllUsers/AllUsers.module.css';

let Preloader = (props) => {
    return (
        <div className={StyleSheet.preloader}>
            <img src={preloader} />
        </div>)
}

export default Preloader;