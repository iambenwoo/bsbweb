import React, { Component } from 'react';
import navStyles from './Nav.module.css';

class MenuItem4Dropdown extends Component {

    render() {

        return (
            <div className={navStyles.dropdown_menu_content}>
                <a href="/">Link 3</a>
                <a href="/">Link 4</a>
            </div>
        )
    }

}

export default MenuItem4Dropdown;