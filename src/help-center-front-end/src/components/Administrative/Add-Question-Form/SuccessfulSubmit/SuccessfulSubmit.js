import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faComments
} from '@fortawesome/free-solid-svg-icons';

import './SuccessfulSubmit.css';

function SuccessfulSubmit() {
    return (
        <div class="administrative-question__main__confirmation">
            <h1>Thank you for contacting us!</h1>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
            <p>Your question was received and is currently beeing processed. You will receive response by emailin the next few hours</p>
            <a href="">
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                <p>
                    Browse the Frequently Asked Questions (FAQ)
            </p>
            </a>
        </div>
    )
}

export default SuccessfulSubmit;