import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsDown,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

import './QuestionCard.css';

function QuestionCard(props) {
    const { id, title, profileImgUrl, description, firstName, lastName, answers, createdOn, dislikes, likes } = props;

    return (
        <article className="question-area__main-content__item-card" onClick={(e) => props.selectQuestionHandler(e, id)}>
            <header className="question-area__main-content__item-card__header">
                <img src={profileImgUrl} alt="" />
                <div className="question-area__main-content__item-card__header-second-col">
                    <p className="question-area__main-content__item-card__elipsis question-area__bold">{firstName} {lastName}</p>
                    <p className="question-area__main-content__item-card__elipsis question-area__main-content__item-card__date">{createdOn}</p>
                </div>
                <div className="question-area__main-content__item-card__header-third-col">
                    <p className="question-area__main-content__item-card__counter"><strong>{answers}</strong> answers</p>
                    <div className="question-area__main-content__item-card__buttons">
                        <button className="question-area__main-content__item-card__left-btn">
                            {dislikes} <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                        <button className="question-area__main-content__item-card__right-btn">
                            {likes}  <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                    </div>
                </div>
            </header>
            <div>
                <h2 className="question-area__main-content__item-card__elipsis">{title}</h2>
                <p className="question-area__main-content__item-card__elipsis">{description}</p>
            </div>
        </article>
    )
}

export default QuestionCard;