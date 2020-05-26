import React from 'react';
import './QuestionAnswer.css';
import RichEditor from '../../Rich-Editor/RichEditor';

function QuestionAnswer(props) {
    const { title, profileImgUrl, description, firstName, lastName, createdOn } = props.question;

    return (
        <div className="question-area__side-content__answer-wrapper">
            <h2>{title}</h2>

            <div className="question-area__side-content__user-details">
                <img src={profileImgUrl} alt="" />
                <div className="question-area__side-content__answer-wrapper__text">
                    <p className="question-area__side-content__answer-wrapper__name">{firstName} {lastName} <span>{createdOn}</span></p>
                    <p>{description}</p>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                </div>
            </div>
            <form>
              <RichEditor />
              <input className="question-area__side-content__answer-wrapper__submit-btn" type="submit"/>
            </form>
        </div>
    )
}

export default QuestionAnswer;