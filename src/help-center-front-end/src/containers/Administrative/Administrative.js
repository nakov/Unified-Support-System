import React, { Fragment } from 'react';

import './Administrative.css';
import FaqList from '../../components/Administrative/FAQ-List/FaqList';
import AddQuestionForm from '../../components/Administrative/Add-Question-Form/AddQuestionForm';

function AdministrativeContainer(props) {
    const faqListData = [
        { id: 0, title: 'Optimal Hours Per Week', createdOn: '20-April-2020 11:39', content: 'What is the optimal hours per week to spend on learning programming?' },
        { id: 1, title: 'Holidays: Dec 2019 - Jan 2020', createdOn: '10-Dec-2019 9:19', content: 'During the New Year\'s holidays our technical support team will work...' },
        { id: 2, title: 'Profession Change', createdOn: '23-Feb-2020 16:31', content: 'Can I change my profession? I want Java, but I started with Python...' }
    ]

    return (
        <Fragment>
            <section className="administrative-question__main">
                <AddQuestionForm>
                </AddQuestionForm>
            </section>
            <section className="administrative-question-list">
                <FaqList faq={faqListData}>
                </FaqList>
            </section>
        </Fragment>
    )
}

export default AdministrativeContainer;