import React, { Component } from 'react';
import navStyles from './Nav.module.css';
import './Nav.module.css';
import logo from '../../Assets/Sixtybees.logo.small.png';
import hamburger from '../../Assets/hamburger_icon.png';

class Drawer extends Component {

    state = {
        drawerClosed: true,
        drawerCss: [navStyles.drawer, navStyles.close].join(' ')
    }

    onClickHamburgerMenu = (e) => {

        let s = this.state.drawerClosed;

        if (s === true) {
            this.setState({
                drawerClosed: false,
                drawerCss: [navStyles.drawer, navStyles.open].join(' ')
            })
        } else {
            this.setState({
                drawerClosed: true,
                drawerCss: [navStyles.drawer, navStyles.close].join(' ')
            })
        }

    }    

    render() {

        return (
            <React.Fragment>
                <div className={navStyles.drawer_top_bar}>
                    <div className={navStyles.drawer_top_bar_left}>
                        <img src={hamburger} alt="logo" height="35px" onClick={this.onClickHamburgerMenu.bind(this)} />
                    </div>
                    <div className={navStyles.drawer_top_bar_center}>
                        <img src={logo} alt="logo" height="49px" />
                    </div>
                    <div className={navStyles.drawer_top_bar_right}>
                    </div>
                </div >
                <div className={this.state.drawerCss}>
                    <div className={navStyles.drawer_menu}>Menu 1x</div>
                    <div className={navStyles.drawer_menu}>Menu 2x</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Drawer;