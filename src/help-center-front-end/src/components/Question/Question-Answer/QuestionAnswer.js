import React from 'react';

import './QuestionAnswer.css';

function QuestionAnswer(props) {
    const { title, description, firstName, lastName, createdOn } = props.question;
    return (
        <div className="question-area__side-content__answer-wrapper">
            <h2>{title}</h2>
            <div className="question-area__side-content__user-details">
                <img src="" alt="" />
                <div className="question-area__side-content__answer-wrapper__text">
                    <p className="question-area__side-content__answer-wrapper__name">{firstName} {lastName} <span>{createdOn}</span></p>
                    <p>{description}</p>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                </div>
            </div>
            <textarea className="question-area__side-content__answer-wrapper__editor" name="comment">

            </textarea>
        </div>
    )
}

export default QuestionAnswer;