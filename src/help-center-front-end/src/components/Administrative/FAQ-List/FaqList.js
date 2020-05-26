import React, { Fragment } from 'react';

import './FaqList.css';

function FaqList() {
    return (
        <Fragment>
            <form action="" method="get" class="administrative-question-list__search-form">

            </form>

            <div class="administrative-question-list__cards-list">
                <article class="administrative-question-list__cards-list__question-card">
                    <h3 class="administrative-question-list__cards-list__question-card__h2">Optimal Hours Per Week</h3>
                    <p class="administrative-question-list__cards-list__question-card--date">20-April-2020 11:39</p>
                    <p class="administrative-question-list__cards-list__question-card__p">What is the optimal hours per week to
                    spend on learning programming?</p>
                </article>
                <article class="administrative-question-list__cards-list__question-card">
                    <h3 class="administrative-question-list__cards-list__question-card__h2">Holidays: Dec 2019 - Jan 2020</h3>
                    <p class="administrative-question-list__cards-list__question-card--date">10-Dec-2019 9:19</p>
                    <p class="administrative-question-list__cards-list__question-card__p">During the New Year's holidays our technical support team will work...
                    spend on learning programming?</p>
                </article>
                <article class="administrative-question-list__cards-list__question-card">
                    <h3 class="administrative-question-list__cards-list__question-card__h2">Profession Change</h3>
                    <p class="administrative-question-list__cards-list__question-card--date">23-Feb-2020 16:31</p>
                    <p class="administrative-question-list__cards-list__question-card__p">Can I change my profession? I want Java, but I started with Python...
                    spend on learning programming?</p>
                </article>

            </div>

            <div class="question-area__main-content__send-or-ask send-or-ask">
                <i class="fas fa-plus-circle"></i>
                <p class="send-or-ask__p">New Question</p>
            </div>
        </Fragment>
    )
}

export default FaqList;