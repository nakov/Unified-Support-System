import React from 'react';

import NavigationPanel from './panels/NavigationPanel';
import TechnicalNavPanel from './panels/TechnicalPanel';
import { 
    faHome, 
    faAddressCard, 
    faUserFriends 
} from '@fortawesome/free-solid-svg-icons';

const panelNames = {
    helpCenter: 'Help Center',
    administrative: 'Administrative',
    community: 'Community'
}

function SideNavigation() {
    const { helpCenter, administrative, community } = panelNames;

    return (
        <nav className="help-center__nav">
            <NavigationPanel 
                panelName={helpCenter}
                icon={faHome}
                navLink={'/'}>
            </NavigationPanel>
            <TechnicalNavPanel />
            <NavigationPanel
                panelName={administrative} 
                icon={faAddressCard}
                navLink={'/administrative'}>
            </NavigationPanel>
            <NavigationPanel 
                panelName={community} 
                icon={faUserFriends}
                navLink={'/community'}>
            </NavigationPanel>
        </nav>
    )
}

export default SideNavigation;