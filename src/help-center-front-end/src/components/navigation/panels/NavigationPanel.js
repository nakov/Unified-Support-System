import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavigationPanel.css';
import '../SideNavigation.css';

function NavigationPanel(props) {
    const {  icon, panelName, onPanelClick } = props;

    function changePanelName(name){
        onPanelClick(name);
    }

    return (
        <NavLink activeStyle={ {color: 'blue'} } to={props.navLink} exact
        onClick={()=>changePanelName(panelName)}>
            <div className="help-center__nav__panel">
                <FontAwesomeIcon icon={icon} size="lg" />
                <h2>{panelName}</h2>
            </div>
        </NavLink>
    )
}

export default NavigationPanel;