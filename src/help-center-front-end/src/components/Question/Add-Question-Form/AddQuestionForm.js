import React from 'react';

import './AddQuestionForm.css';
import RichEditor from '../../Rich-Editor/RichEditor';

function AddQuestionForm(props) {
    return (
        <React.Fragment>
            <form action="" method="post" className="question-area__side-content__add-question-form">
                <input type="text" name="title" placeholder="Type the question title here..." />
                <RichEditor />
            </form>
        </React.Fragment>
    )
}

export default AddQuestionForm;