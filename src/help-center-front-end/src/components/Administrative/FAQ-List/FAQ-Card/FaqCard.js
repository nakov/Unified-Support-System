import React from 'react';

import './FaqCard.css';

function FaqCard(props) {
    const { id, title, createdOn, content, changeComponentTypeHandler } = props;
    const isActive = props.activeQuestionId === id ? 'is-active' : '';

    return (
        <article className={`administrative-question-list__cards-list__question-card ${isActive}`}
            onClick={(e) => {
                changeComponentTypeHandler(e, 'faqDetails', id);
                props.setActiveQuestion(id);
            }}>
            <h3 className="administrative-question-list__cards-list__question-card__h2">{title}</h3>
            <p className="administrative-question-list__cards-list__question-card--date">{createdOn}</p>
            <p className="administrative-question-list__cards-list__question-card__p">{content}</p>
        </article>
    )
}

export default FaqCard;