import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsDown,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

import './QuestionCard.css';

function QuestionCard(props) {

    const { id, title, description, firstName, lastName, answers, createdOn, dislikes, likes } = props;

    return (
        <a className="question-area__main-content__item-card--link" 
          onClick={(e) => props.selectQuestionHandler(e, id)} href="/">
            <div className="question-area__main-content__item-card">
                <header className="question-area__flex">
                    <img src="" alt="" />
                    <div>
                        <div className="question-area__flex">
                            <p className="question-area__main-content__item-card__elipsis question-area__bold">{firstName} {lastName}</p>
                            <p className="question-area__main-content__item-card__counter">{answers} answers</p>
                        </div>
                        <div className="question-area__flex">
                            <p className="question-area__main-content__item-card__elipsis question-area__main-content__item-card__date">{createdOn}</p>
                            <button className="question-area__main-content__item-card__left-btn question-area__flex">
                                {dislikes} <FontAwesomeIcon icon={faThumbsDown} />
                            </button>
                            <button className="question-area__main-content__item-card__right-btn question-area__flex">
                                {likes}  <FontAwesomeIcon icon={faThumbsUp} />
                            </button>
                        </div>
                    </div>
                </header>
                <div>
                    <h2 className="question-area__main-content__item-card__elipsis">{title}</h2>
                    <p className="question-area__main-content__item-card__elipsis">{description}</p>
                </div>
            </div>
        </a>
    )
}

export default QuestionCard;