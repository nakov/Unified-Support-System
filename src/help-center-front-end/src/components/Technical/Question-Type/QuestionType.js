import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCogs,
    faAddressCard,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';

import './QuestionType.css';

function QuestionType(props) {
    const { changeComponentTypeHandler } = props;

    return (
        <React.Fragment>
            <div onClick={(e) => changeComponentTypeHandler(e, 'addQuestionForm') } className="question-area__side-content__question-type">
                <header>
                    <FontAwesomeIcon icon={faCogs} size="lg" />
                    <h3>Ask a <b>technical</b> question</h3>
                </header>
                <p>E.g. Where is the problem in this code.../ Help me with this error message.../ How to use this
                library...</p>
            </div>
            <NavLink className="question-area__side-content__question-type-link" to="/administrative">
                <div className="question-area__side-content__question-type">
                    <header>
                        <FontAwesomeIcon icon={faAddressCard} size="lg" />
                        <h3>Ask an <b>administrative</b> question</h3>
                    </header>
                    <p>E.g. I cannot access my course contetn.../ My payment failed.../ Can I use Java at the exam...
                </p>
                </div>
            </NavLink>
            <NavLink className="question-area__side-content__question-type-link" to="/community">
                <div className="question-area__side-content__question-type">
                    <header>
                        <FontAwesomeIcon icon={faUserFriends} size="lg" />
                        <h3>Share with the <b>community</b></h3>
                    </header>
                    <p>E.g. Apple created a new AI tool, what do you think.../ JS is the most active language in
                    StackOverflow...</p>
                </div>
            </NavLink>
        </React.Fragment>
    )
}

export default QuestionType;