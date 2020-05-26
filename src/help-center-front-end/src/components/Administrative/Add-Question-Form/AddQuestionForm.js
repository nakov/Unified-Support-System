import React from 'react';

import './AddQuestionForm.css';

function AddQuestionForm() {
    return (
        <form action="" method="post" className="administrative-question__main__form">
            <div className="administrative-question__main__form__input-field-with-icon">
                <i className="far fa-comments"></i>
                <input type="text" name="title" placeholder="Subject" />
            </div>
            <div className="administrative-question__main__form__input-field-with-icon">
                <i className="far fa-envelope"></i>
                <input type="text" name="title" placeholder="Your Email" />
            </div>
            <textarea name="content" className="administrative-question__main__form__textarea"
                placeholder="Describe your problem/inquiry here..."></textarea>
            <a href="">
                <div className="send-or-ask">
                    <i className="fas fa-plus-circle"></i>
                    <p className="send-or-ask__p">Send Question</p>
                </div>
            </a>
        </form>
    )
}

export default AddQuestionForm;