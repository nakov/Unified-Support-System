import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUser, faMapMarkedAlt, faFile, faBook } from '@fortawesome/free-solid-svg-icons';

const StyledUl = styled.ul`
    padding: 10px;
    li:hover {
        ${props => props.hoverStyling}
    }
`
const StyledLi = styled.li`
    list-style-type: none;
    border-radius: 3px;
    background: #ddd;
    width: calc(100% - 10px);
    margin: 0 auto;
    padding: 3px 0px;
    margin: 4px 0px;
    text-align: center;
    margin: 10px 5px 10px 5px;
`
const linksData = [
    { navUrl: '/my', text: 'My', icon: faUser },
    { navUrl: '/section', text: 'Section', icon: faMapMarkedAlt },
    { navUrl: '/lesson', text: 'Lesson', icon: faFile },
    { navUrl: '/course', text: 'Course', icon: faBook },
]

function TechnicalNavPanel(props) {
    const { StyledPanel, hoverStyling } = props;

    return (
        <StyledPanel>
            <FontAwesomeIcon icon={faCogs} size="lg" />
            <h2>Technical</h2>
            <StyledUl hoverStyling={hoverStyling} >
                {
                    linksData.map((ld, i) => 
                        <NavLink activeStyle={{
                            color: 'blue',
                        }} key={i} to={ld.navUrl}>
                            <StyledLi>
                                <FontAwesomeIcon icon={ld.icon} size="lg" pull="left" />
                                {ld.text}
                            </StyledLi>
                        </NavLink>
                    )
                }
            </StyledUl>
        </StyledPanel>
    )
}

export default TechnicalNavPanel;