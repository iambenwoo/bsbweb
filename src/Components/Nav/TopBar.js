import React, { Component } from 'react';
import navStyles from './Nav.module.css';
import logo from '../../Assets/Sixtybees.logo.small.png';
import profile from '../../Assets/profile.png';
import MenuItem from './MenuItem';
import TopDropdownContent3 from './TopDropdownContent3';
import TopDropdownContent4 from './TopDropdownContent4';

class TopBar extends Component {

    label_1 = "Label 1";
    label_2 = "Label 2";
    label_3 = "Label 3";
    label_4 = "Label 4";

    constructor(props) {
        super(props);
        this.state = {};
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll = (e) => {
        this.setState(
            {
                scroll: window.scrollY,
            }
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {

        return (
            <div className={navStyles.top_bar}>
                <div className={navStyles.top_bar_left}>
                    <MenuItem type='icon' url="/"><img src={logo} alt="logo" height="49px" /></MenuItem>
                    <MenuItem type='link' label={this.label_1} url="/" />
                    <MenuItem type='link' label={this.label_2} url="/label2" />
                    <MenuItem type='dropdown' label={this.label_3}>
                        <TopDropdownContent3 />
                    </MenuItem>
                    <MenuItem type='dropdown' label={this.label_4}>
                        <TopDropdownContent4 />
                    </MenuItem>
                </div>
                <div className={navStyles.top_bar_right}>
                    <MenuItem type='icon' url="/"><img src={profile} alt="profile" height="35px" /></MenuItem>
                </div>
            </div >
        )
    }
}

export default TopBar;