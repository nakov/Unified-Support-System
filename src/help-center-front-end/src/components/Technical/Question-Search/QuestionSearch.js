import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';

import './QuestionSearch.css';

function QuestionSearch() {
    return (
        <form action="" method="get" className="question-area__flex question-area__main-content__search-form">
            <button type="submit" className="question-area__flex question-area__main-content__search-form--btn">
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
            <input type="text" placeholder="Search..." />
            <div className="question-area__main-content__search-form__select-wraper">
                <label htmlFor="question-area__main-content__search-form__custom-select">
                    <FontAwesomeIcon icon={faSortAmountDown} />
                </label>
                <select id="question-area__main-content__search-form__custom-select">
                    <option value="latest">Latest</option>
                    <option value="most-liked">Most Liked</option>
                    <option value="most-commented">Most commented</option>
                    <option value="unread">Unread</option>
                </select>
            </div>
        </form>
    )
}

export default QuestionSearch;