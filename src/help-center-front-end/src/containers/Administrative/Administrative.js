import React, { Fragment } from 'react';

import './Administrative.css';
import FaqList from '../../components/Administrative/FAQ-List/FaqList';
import AddQuestionForm from '../../components/Administrative/Add-Question-Form/AddQuestionForm';

function AdministrativeContainer(props) {
    return (
        <Fragment>
            <section className="administrative-question__main">
                <AddQuestionForm>
                </AddQuestionForm>
            </section>
            <section className="administrative-question-list">
                <FaqList>
                </FaqList>
            </section>
        </Fragment>
    )
}

export default AdministrativeContainer;