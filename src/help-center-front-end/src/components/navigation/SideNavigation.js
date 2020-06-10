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

    const unActivePanel = activePanel === 'Help Center' || activePanel === 'Technical' ? '' : 'hide-details';

    return (
        <nav className="help-center__nav">
            <NavigationPanel
                panelName={helpCenter}
                icon={faHome}
                navLink={'/'}
                setActivePanel={setActivePanel}>
            </NavigationPanel>
            <TechnicalNavPanel
                unActivePanel={unActivePanel}
                setActivePanel={setActivePanel} />
            <NavigationPanel
                panelName={administrative}
                icon={faAddressCard}
                navLink={'/administrative'}
                setActivePanel={setActivePanel}>
            </NavigationPanel>
            <NavigationPanel
                panelName={community}
                icon={faUserFriends}
                navLink={'/community'}
                setActivePanel={setActivePanel}>
            </NavigationPanel>
        </nav>
    )
}

export default SideNavigation;
