import React from 'react';

import './AddQuestionForm.css';

function AddQuestionForm() {
    return (
        <form action="" method="post" class="administrative-question__main__form">
            <div class="administrative-question__main__form__input-field-with-icon">
                <i class="far fa-comments"></i>
                <input type="text" name="title" placeholder="Subject" />
            </div>
            <div class="administrative-question__main__form__input-field-with-icon">
                <i class="far fa-envelope"></i>
                <input type="text" name="title" placeholder="Your Email" />
            </div>
            <textarea name="content" class="administrative-question__main__form__textarea"
                placeholder="Describe your problem/inquiry here..."></textarea>
            <a href="">
                <div class="send-or-ask">
                    <i class="fas fa-plus-circle"></i>
                    <p class="send-or-ask__p">Send Question</p>
                </div>
            </a>
        </form>
    )
}

export default AddQuestionForm;