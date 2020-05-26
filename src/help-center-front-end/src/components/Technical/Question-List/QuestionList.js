import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import QuestionSearch from '../../Question-Search/QuestionSearch';
import QuestionCard from '../Question-Card/QuestionCard';

import './QuestionList.css';

function QuestionList(props) {
    const { questionsData, selectQuestionHandler, changeComponentTypeHandler } = props;

    return (
        <section className="question-area__main-content">
            <QuestionSearch placeholder={'Search Questions...'} />
            
            {
                questionsData.map((qData) =>
                    <QuestionCard {...qData} key={qData.id} selectQuestionHandler={selectQuestionHandler} />
                )
            }

            <div onClick={(e) => changeComponentTypeHandler(e, 'questionType')}
                className="question-area__main-content__send-or-ask send-or-ask">
                <FontAwesomeIcon icon={faPlusCircle} />
                <p className="send-or-ask__p">New Question</p>
            </div>
        </section>
    )
}

export default QuestionList;