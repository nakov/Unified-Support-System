import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments,
    faEnvelope,
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

import './AddQuestionForm.css';

function AddQuestionForm(props) {
    const { changeComponentTypeHandler } = props;

    return (
        <form onSubmit={(e) => changeComponentTypeHandler(e, 'successfulSubmit')} className="administrative-question__main__form">
            <div className="administrative-question__main__form__input-field-with-icon">
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                <input type="text" name="title" placeholder="Subject" />
            </div>
            <div className="administrative-question__main__form__input-field-with-icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <input type="text" name="title" placeholder="Your Email" />
            </div>
            <textarea name="content" className="administrative-question__main__form__textarea"
                placeholder="Describe your problem/inquiry here..."></textarea>

            <button type="submit">
                <div className="send-or-ask">
                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                    <p className="send-or-ask__p">Send Question</p>
                </div>
            </button>
        </form>
    )
}

export default AddQuestionForm;