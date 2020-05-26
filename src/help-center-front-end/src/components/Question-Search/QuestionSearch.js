import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';

import './QuestionSearch.css';

function QuestionSearch(props) {
    const { placeholder } = props;
    
    return (
        <form action="" method="get" className="question-area__flex help-center-question__search-form">
            <button type="submit" className="question-area__flex help-center-question__search-form--btn">
                <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
            <input type="text" placeholder={placeholder} />
            <div className="help-center-question__search-form__select-wraper">
                <label htmlFor="help-center-question__search-form__custom-select">
                    <FontAwesomeIcon icon={faSortAmountDown} />
                </label>
                <select id="help-center-question__search-form__custom-select">
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