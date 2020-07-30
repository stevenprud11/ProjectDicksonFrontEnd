import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/SideDrawerButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Project Dickson</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
)

export default toolbar;