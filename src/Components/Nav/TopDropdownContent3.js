import React, { Component } from 'react';
import navStyles from './Nav.module.css';

class MenuItem3Content extends Component {

    render() {

        return (
            <div className={navStyles.dropdown_menu_content}>
                <table height="50px"><tbody>
                    <tr>
                        <td>Abc</td><td>Def</td>
                    </tr></tbody>
                </table>
            </div>
        )
    }

}

export default MenuItem3Content;