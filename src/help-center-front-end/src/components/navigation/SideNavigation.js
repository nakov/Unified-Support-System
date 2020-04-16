import React from 'react';
import styled from 'styled-components';

import NavigationPanel from './panels/NavigationPanel';
import TechnicalNavPanel from './panels/TechnicalPanel';

import { 
    faHome, 
    faAddressCard, 
    faUserFriends 
} from '@fortawesome/free-solid-svg-icons';

const StyledNav = styled.nav`
    border: 5px solid #eee;
    padding: 5px;
    a {
        text-decoration: none;
        color: inherit;
    }

`

const StyledPanel = styled.div`
    :hover {
        ${props => props.hoverStyling}
    }
    background: #eee;
    border-radius: 5px;
    padding-top: 5px;
    h2 {
        font-size: 1em;
        padding: 6px;
        margin: 5px;
        text-align: center;
    }
    svg {
        display: block;
        margin: auto;
    }
`

const hoverCss = {
    background: '#777',
    color: '#eee',
}

const panelNames = {
    helpCenter: 'Help Center',
    administrative: 'Administrative',
    community: 'Community'
}

function SideNavigation() {
    const { helpCenter, administrative, community } = panelNames;

    return (
        <StyledNav>
            <NavigationPanel 
                StyledPanel={StyledPanel} 
                panelName={helpCenter} 
                hoverStyling={hoverCss}
                icon={faHome}
                navLink={'/'}>
            </NavigationPanel>
            <TechnicalNavPanel
                StyledPanel={StyledPanel}
                hoverStyling={hoverCss}>
            </TechnicalNavPanel>
            <NavigationPanel 
                StyledPanel={StyledPanel} 
                panelName={administrative} 
                hoverStyling={hoverCss}
                icon={faAddressCard}
                navLink={'/administrative'}>
            </NavigationPanel>
            <NavigationPanel 
                StyledPanel={StyledPanel} 
                panelName={community} 
                hoverStyling={hoverCss}
                icon={faUserFriends}
                navLink={'/community'}>
            </NavigationPanel>
        </StyledNav>
    )
}

export default SideNavigation;