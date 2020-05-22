import React, { useState, Fragment } from 'react';

import QuestionList from '../../components/Question/Question-List/QuestionList';
import QuestionAnswer from '../../components/Question/Question-Answer/QuestionAnswer';
import QuestionType from '../../components/Question/Question-Type/QuestionType';
import AddQuestionForm from '../../components/Question/Add-Question-Form/AddQuestionForm';

import './Technical.css';

function TechnicalContainer() {
    const [id, setId] = useState(0);
    const [componentType, setComponentType] = useState('questionAnswer');

    const questionsData = [
        { id: 0, title: 'Help with Old Books Problem', profileImgUrl: 'https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128', description: 'Hello, I need some help to solve the problem.....', firstName: 'Peter', lastName: 'Petrov', answers: 2, createdOn: '15.05.2020 09.45', dislikes: 0, likes: 0 },
        { id: 1, title: 'Question', description: 'Hi, can you please help me with the solution of the Problem 3....', profileImgUrl: 'https://randomuser.me/api/portraits/men/60.jpg', firstName: 'John', lastName: 'Doe', answers: 5, createdOn: '16.05.2020 09.58', dislikes: 3, likes: 2 },
        { id: 2, title: 'Help with first Problem', description: 'Hi, can you please help me with the solution of the Problem 1....', profileImgUrl: 'https://static-exp1.licdn.com/sc/p/com.linkedin.jobs-guest-frontend%3Ajobs-guest-frontend-static-content%2B0.0.2556/f/%2Fjobs-guest-frontend%2Fimages%2Fcommon%2Fpeople%2Fuser7.jpg', firstName: 'Mark', lastName: 'Johnson', answers: 1, createdOn: '18.05.2020 09.58', dislikes: 1, likes: 5 }
    ];

    const dynamicComponents = {
        questionAnswer: QuestionAnswer,
        questionType: QuestionType,
        addQuestionForm: AddQuestionForm
    }

    function selectQuestionHandler(e, selectedId) {
        e.preventDefault();

        setId(selectedId);
        setComponentType('questionAnswer');
    }

    function changeComponentTypeHandler(e, type) {
        if (e) {
            e.preventDefault();
        }

        setComponentType(type);
    }

    const TypeComponent = dynamicComponents[componentType];

    return (
        // <main className="question-area__container">
        <Fragment>
            <QuestionList
                questionsData={questionsData}
                selectQuestionHandler={selectQuestionHandler}
                changeComponentTypeHandler={changeComponentTypeHandler} />
            <section className="question-area__side-content">
                <TypeComponent
                    question={questionsData[id]}
                    changeComponentTypeHandler={changeComponentTypeHandler} />
            </section>
        </Fragment>
        // </main>
    )
}

export default TechnicalContainer;