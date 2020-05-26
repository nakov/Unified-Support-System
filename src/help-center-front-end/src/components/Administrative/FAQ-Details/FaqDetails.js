import React from 'react';

import './FaqDetails.css';

function FaqDetails(props) {
    const { selectedQuestion } = props;

    return (
        <div className="administrative-question__main__answer-wrapper">
            <h1>{selectedQuestion.title}</h1>
            <div className="administrative-question__main__content-wrapper">
                <div className="administrative-question__main__question-content">
                    <p>Q</p>
                    <p className="administrative-question__main__question-content__question">{selectedQuestion.content}</p>
                </div>
                <div className="administrative-question__main__answer-content">
                    <p className="border">A</p>
                    <div className="administrative-question__main__answer-content__answers-container">
                        <p className="administrative-question__main__answer-content__answer">During the New Year's holiday our technical support team will work with limited
                        resources. so you can expect answers to technical questions within 48 hours.</p>
                        <p className="administrative-question__main__answer-content__answer">Note: questions in English are usually answered faster than questions in your local
                        language.</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                        <p className="administrative-question__main__answer-content__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem deserunt possimus accusamus! Eum eveniet iure earum illo recusandae, dignissimos quis? Quasi non totam fuga velit! Voluptatum reprehenderit atque et?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqDetails;