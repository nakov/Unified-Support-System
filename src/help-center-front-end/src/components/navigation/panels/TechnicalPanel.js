import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';

import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome';
import { faCogs, faUser, faMapMarkedAlt, faFile, faBook } from './node_modules/@fortawesome/free-solid-svg-icons';

import './TechnicalPanel.css';

function TechnicalNavPanel() {

    const linksData = [
        { navUrl: '/my', text: 'My', icon: faUser },
        { navUrl: '/section', text: 'Section', icon: faMapMarkedAlt },
        { navUrl: '/lesson', text: 'Lesson', icon: faFile },
        { navUrl: '/course', text: 'Course', icon: faBook },
    ]
    
    return (
        <div className='help-center__nav__technical-panel'>
            <FontAwesomeIcon icon={faCogs} size="lg" />
            <h2>Technical</h2>
            <ul>
                {
                    linksData.map((ld, i) => 
                        <NavLink activeStyle={{
                            color: 'blue',
                        }} key={i} to={ld.navUrl}>
                            <li>
                                <FontAwesomeIcon icon={ld.icon} size="lg" pull="left" />
                                {ld.text}
                            </li>
                        </NavLink>
                    )
                }
            </ul>
        </div>
    )
}

export default TechnicalNavPanel;