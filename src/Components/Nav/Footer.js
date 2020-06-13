import React, { Component } from 'react';
import navStyles from './Nav.module.css';

class Footer extends Component {

    render() {
        return (
            <div className={navStyles.footer}>
                <div>This is footer</div>
            </div>
        )
    }
}

export default Footer;