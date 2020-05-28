import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUser, faMapMarkedAlt, faFile, faBook } from '@fortawesome/free-solid-svg-icons';

import './TechnicalPanel.css';

function TechnicalNavPanel() {

    const linksData = [
        { navUrl: '/my', text: 'My', icon: faUser },
        { navUrl: '/section', text: 'Section', icon: faMapMarkedAlt },
        { navUrl: '/lesson', text: 'Lesson', icon: faFile },
        { navUrl: '/course', text: 'Course', icon: faBook },
    ]

    return (
        <NavLink to={'/my'} exact activeClassName='help-center__nav__a'>
            <div className='help-center__nav__technical-panel'>
                <FontAwesomeIcon icon={faCogs} size="lg" />
                <h2>Technical</h2>
                <ul className="display-block">
                    {
                        linksData.map((ld, i) =>
                            <NavLink activeStyle={{
                                color: 'blue',
                            }} key={i} to={ld.navUrl}>
                                <li className="display-block">
                                    <FontAwesomeIcon icon={ld.icon} size="lg" pull="left" />
                                    {ld.text}
                                </li>
                            </NavLink>
                        )
                    }
                </ul>
            </div>
        </NavLink >
    )
}

export default TechnicalNavPanel;