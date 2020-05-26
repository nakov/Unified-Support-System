import React, { Fragment } from 'react';

import FaqCard from './FAQ-Card/FaqCard';
import QuestionSearch from '../../Question-Search/QuestionSearch';

import './FaqList.css';

function FaqList(props) {
    const { faq } = props;

    return (
        <Fragment>
            <QuestionSearch placeholder={'Search FAQ...'}>

            </QuestionSearch>

            <div className="administrative-question-list__cards-list">
                {
                    faq.map(q => <FaqCard {...q} key={q.id}></FaqCard>)
                }
            </div>

            <div className="question-area__main-content__send-or-ask send-or-ask">
                <i className="fas fa-plus-circle"></i>
                <p className="send-or-ask__p">New Question</p>
            </div>
        </Fragment>
    )
}

export default FaqList;