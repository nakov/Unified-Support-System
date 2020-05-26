import React, { Fragment } from 'react';

import './AddQuestionForm.css';
import RichEditor from '../../Rich-Editor/RichEditor';

function AddQuestionForm(props) {
    return (
        <Fragment>
            <form action="" method="post" className="question-area__side-content__add-question-form">
                <input className="question-area__side-content__add-question-form__input" type="text" name="title" placeholder="Type the question title here..." />
                <RichEditor />
                <input className="question-area__side-content__add-question-form__submit-btn" type="submit"/>
            </form>
        </Fragment>
    )
}

export default AddQuestionForm;