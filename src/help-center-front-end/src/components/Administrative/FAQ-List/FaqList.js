import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import FaqCard from './FAQ-Card/FaqCard';
import QuestionSearch from '../../Question-Search/QuestionSearch';

import './FaqList.css';

function FaqList(props) {
    const { faq, changeComponentTypeHandler, componentType } = props;

    const NewQuestionBtn = componentType === 'faqDetails'
        ? ( 
            <div onClick={(e) => changeComponentTypeHandler(e, 'addQuestionForm')} className="question-area__main-content__send-or-ask send-or-ask">
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            <p className="send-or-ask__p">New Question</p>
            </div>
        ) : null;
    
    return (
        <Fragment>
            <QuestionSearch placeholder={'Search FAQ...'}>

            </QuestionSearch>

            <div className="administrative-question-list__cards-list">
                {
                    faq.map(q => <FaqCard {...q}
                        key={q.id}
                        changeComponentTypeHandler={changeComponentTypeHandler}>
                    </FaqCard>
                    )
                }
            </div>

            {NewQuestionBtn}
        </Fragment>
    )
}

export default FaqList;