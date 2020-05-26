import React from 'react';

import './FaqCard.css';

function FaqCard(props) {
    const { title, createdOn, content } = props;

    return (
        <article className="administrative-question-list__cards-list__question-card">
            <h3 className="administrative-question-list__cards-list__question-card__h2">{title}</h3>
            <p className="administrative-question-list__cards-list__question-card--date">{createdOn}</p>
            <p className="administrative-question-list__cards-list__question-card__p">{content}</p>
        </article>
    )
}

export default FaqCard;