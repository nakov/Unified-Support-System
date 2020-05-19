import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import QuestionSearch from '../Question-Search/QuestionSearch';
import QuestionCard from '../Question-Card/QuestionCard';

import './QuestionList.css';

function QuestionList() {
    const questionsData = [
        { title: 'Help with Old Books Problem', description: 'Hello, I need some help to solve the problem.....', firstName: 'Peter', lastName: 'Petrov', answers: 2, createdOn: '15.05.2020 09.45', dislikes: 0, likes: 0 },
        { title: 'Question', description: 'Hi, can you please help me with the solution of the Problem 3....', firstName: 'John', lastName: 'Doe', answers: 5, createdOn: '16.05.2020 09.58', dislikes: 3, likes: 2 }
    ];

    return (
        <section className="question-area__main-content">
            <QuestionSearch />
            {
                questionsData.map((qData) => 
                    <QuestionCard {...qData} />
                )
            }
            <a href="">
                <div className="question-area__main-content__new-question question-area__flex">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <p>New Question</p>
                </div>
            </a>
        </section>
    )
}

export default QuestionList;