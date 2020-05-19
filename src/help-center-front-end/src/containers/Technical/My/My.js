import React from 'react';
import QuestionList from '../../../components/Question/Question-List/QuestionList'

import '../Technical.css';

function MyContainer() {
    return (
        <main className="question-area__container">
            <QuestionList />
            <section className="question-area__side-content">

            </section>
        </main>
    )
}

export default MyContainer;