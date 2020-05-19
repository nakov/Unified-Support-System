import React, { useState } from 'react';
import QuestionList from '../../../components/Question/Question-List/QuestionList'
import QuestionAnswer from '../../../components/Question/Question-Answer/QuestionAnswer';

import '../Technical.css';

function MyContainer() {
    const [id, setId] = useState(0);

    const questionsData = [
        { id: 0, title: 'Help with Old Books Problem', description: 'Hello, I need some help to solve the problem.....', firstName: 'Peter', lastName: 'Petrov', answers: 2, createdOn: '15.05.2020 09.45', dislikes: 0, likes: 0 },
        { id: 1, title: 'Question', description: 'Hi, can you please help me with the solution of the Problem 3....', firstName: 'John', lastName: 'Doe', answers: 5, createdOn: '16.05.2020 09.58', dislikes: 3, likes: 2 }
    ];

    function selectQuestionHandler(e, selectedId) {
        e.preventDefault();

        setId(selectedId);
    }

    return (
        <main className="question-area__container">
            <QuestionList questionsData={questionsData} selectQuestionHandler={selectQuestionHandler} />
            <section className="question-area__side-content">
                <QuestionAnswer question={questionsData[id]} />
            </section>
        </main>
    )
}

export default MyContainer;