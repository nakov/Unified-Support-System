import React, { Fragment, useState } from 'react';
import ReactQuill from 'react-quill';

import './AddQuestionForm.css';

function AddQuestionForm(props) {
    const [value, setValue] = useState('');

    return (
        <Fragment>
            <form action="" method="post" className="question-area__side-content__add-question-form">
                <input className="question-area__side-content__add-question-form__input" type="text" name="title" placeholder="Type the question title here..." />
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                <input className="question-area__side-content__add-question-form__submit-btn" type="submit" />
            </form>
        </Fragment>
    )
}

export default AddQuestionForm;