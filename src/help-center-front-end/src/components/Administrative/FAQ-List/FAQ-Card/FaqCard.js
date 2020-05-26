import React from 'react';

import './FaqCard.css';

function FaqCard(props) {
    const { id, title, createdOn, content, changeComponentTypeHandler } = props;

    return (
        <article onClick={(e) => changeComponentTypeHandler(e, 'faqDetails', id)} className="administrative-question-list__cards-list__question-card">
            <h3 className="administrative-question-list__cards-list__question-card__h2">{title}</h3>
            <p className="administrative-question-list__cards-list__question-card--date">{createdOn}</p>
            <p className="administrative-question-list__cards-list__question-card__p">{content}</p>
        </article>
    )
}

export default FaqCard;