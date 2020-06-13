import React from 'react';
import navStyles from './Nav.module.css';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {

    if (props.type === 'dropdown') {
        return (
            <div className={navStyles.dropdown_menu} >
                <div className={navStyles.menu_item}>
                    <Link to={props.url}>{props.label}</Link>
                </div>
                {props.children}
            </div>
        )
    } else if (props.type === 'link') {
        return (
            <div className={navStyles.menu_item}>
                <Link to={props.url}>{props.label}</Link>
            </div>
        )
    } else if (props.type === 'icon') {
        return (
            <div className={navStyles.menu_item}>
                <Link to={props.url}>{props.children}</Link>
            </div>)
    } else {
        return <div></div>
    }
}

export default MenuItem;