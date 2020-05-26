import React, { Fragment, useState } from 'react';

import FaqList from '../../components/Administrative/FAQ-List/FaqList';
import AddQuestionForm from '../../components/Administrative/Add-Question-Form/AddQuestionForm';
import FaqDetails from '../../components/Administrative/FAQ-Details/FaqDetails';
import SuccessfulSubmit from '../../components/Administrative/Add-Question-Form/SuccessfulSubmit/SuccessfulSubmit';

import './Administrative.css';

function AdministrativeContainer(props) {
    const [questionId, setQuestionId] = useState(0);
    const [componentType, setComponentType] = useState('addQuestionForm');

    const faqListData = [
        { id: 0, title: 'Optimal Hours Per Week', createdOn: '20-April-2020 11:39', content: 'What is the optimal hours per week to spend on learning programming?' },
        { id: 1, title: 'Holidays: Dec 2019 - Jan 2020', createdOn: '10-Dec-2019 9:19', content: 'During the New Year\'s holidays our technical support team will work...' },
        { id: 2, title: 'Profession Change', createdOn: '23-Feb-2020 16:31', content: 'Can I change my profession? I want Java, but I started with Python...' }
    ]

    const dynamicComponents = {
        addQuestionForm: AddQuestionForm,
        faqDetails: FaqDetails,
        successfulSubmit: SuccessfulSubmit
    }

    function changeComponentTypeHandler(e, type, id = null) {
        if (e) {
            e.preventDefault();
        }

        if (id !== null) {
            setQuestionId(id);
        }

        setComponentType(type);
    }

    const TypeComponent = dynamicComponents[componentType];

    return (
        <Fragment>
            <section className="administrative-question__main">
                <TypeComponent
                    selectedQuestion={faqListData[questionId]}
                    changeComponentTypeHandler={changeComponentTypeHandler}>
                </TypeComponent>
            </section>
            <section className="administrative-question-list">
                <FaqList
                    faq={faqListData}
                    changeComponentTypeHandler={changeComponentTypeHandler}
                    componentType={componentType}>
                </FaqList>
            </section>
        </Fragment>
    )
}

export default AdministrativeContainer;