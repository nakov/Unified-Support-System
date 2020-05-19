import React from 'react';

import NavigationPanel from './Panels/NavigationPanel';
import TechnicalNavPanel from './Panels/TechnicalPanel';

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