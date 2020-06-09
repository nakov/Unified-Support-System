import React, { useState } from 'react';

import NavigationPanel from './panels/NavigationPanel';
import TechnicalNavPanel from './panels/TechnicalPanel';

import {
    faHome,
    faAddressCard,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';

function SideNavigation() {
    const panelNames = {
        helpCenter: 'Help Center',
        administrative: 'Administrative',
        community: 'Community'
    }

    const { helpCenter, administrative, community } = panelNames;
    const [activePanel, setActivePanel] = useState('Help Center');

    const onPanelClick = (name) => {
        setActivePanel(name);
    };
    const unActivePanel = activePanel === 'Help Center' || activePanel === 'Technical' ? '' : 'hide-details';

    return (
        <nav className="help-center__nav">
            <NavigationPanel
                panelName={helpCenter}
                icon={faHome}
                navLink={'/'}
                onPanelClick={onPanelClick}>
            </NavigationPanel>
            <TechnicalNavPanel
                unActivePanel={unActivePanel}
                onPanelClick={onPanelClick} />
            <NavigationPanel
                panelName={administrative}
                icon={faAddressCard}
                navLink={'/administrative'}
                onPanelClick={onPanelClick}>
            </NavigationPanel>
            <NavigationPanel
                panelName={community}
                icon={faUserFriends}
                navLink={'/community'}
                onPanelClick={onPanelClick}>
            </NavigationPanel>
        </nav>
    )
}

export default SideNavigation;
