import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function NavigationPanel(props) {
    const { StyledPanel, hoverStyling, icon, panelName } = props;

    return (
        <NavLink activeStyle={{
            color: 'blue',
        }} exact to={props.navLink}>
            <StyledPanel hoverStyling={hoverStyling}>
                <FontAwesomeIcon icon={icon} size="lg" />
                <h2>{panelName}</h2>
            </StyledPanel>
        </NavLink>
    )
}

export default NavigationPanel;