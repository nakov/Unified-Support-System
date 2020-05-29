import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';

import './CommunityCard.css';

function CommunityCard(props) {
    const { imgUrl, title, membersCount, linkUrl, description } = props;

    return (
        <article className="help-center__community-wrapper__card">
            <img src={imgUrl} alt="group-picture" className="help-center__community-wrapper__img" />
            <h2 className="help-center__community-wrapper__h2">{title}</h2>
            <p className="help-center__community-wrapper--fb-members">Facebook Group - <span>{membersCount}</span> members</p>
            <a className="help-center__community-wrapper--link-btn" href={linkUrl}>
                <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                <p className="help-center__community-wrapper--link-btn__p">Visit Group</p>
            </a>
            <p className="help-center__community-wrapper__p">{description}</p>
        </article>
    )
}

export default CommunityCard;