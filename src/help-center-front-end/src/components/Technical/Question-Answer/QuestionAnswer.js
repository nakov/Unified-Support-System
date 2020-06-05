import React, { useState } from 'react';
import './QuestionAnswer.css';
import ReactQuill from 'react-quill';

function QuestionAnswer(props) {
    const { title, profileImgUrl, description, firstName, lastName, createdOn } = props.question;
    const [value, setValue] = useState('');

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
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                <input className="question-area__side-content__answer-wrapper__submit-btn" type="submit" />
            </form>
        </div>
    )
}

export default QuestionAnswer;