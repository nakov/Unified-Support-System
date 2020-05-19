import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import QuestionSearch from '../Question-Search/QuestionSearch';
import QuestionCard from '../Question-Card/QuestionCard';

import './QuestionList.css';

function QuestionList(props) {
    const { questionsData, selectQuestionHandler, changeComponentTypeHandler } = props;

    return (
        <section className="question-area__main-content">
            <QuestionSearch />
            {
                questionsData.map((qData) => 
                    <QuestionCard {...qData} key={qData.id} selectQuestionHandler={selectQuestionHandler} />
                )
            }

            <a onClick={(e) => changeComponentTypeHandler(e, 'questionType')} href="/">
                <div className="question-area__main-content__new-question question-area__flex">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <p>New Question</p>
                </div>
            </a>
        </section>
    )
}

export default QuestionList;