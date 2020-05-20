import React from 'react';

import './AddQuestionForm.css';

function AddQuestionForm(props) {
    return (
        <React.Fragment>
            <form action="" method="post" className="question-area__side-content__add-question-form">
                <input type="text" name="title" placeholder="Type the question title here..." />
                <textarea name="content" placeholder="Type your question here..."></textarea>
            </form>
        </React.Fragment>
    )
}

export default AddQuestionForm;