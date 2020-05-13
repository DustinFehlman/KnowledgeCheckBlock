import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckFeedback({isCorrect, blurb}) {
    return(
        <div className="feedbackContainer">
            <FontAwesomeIcon icon={isCorrect ? faCheck : faExclamationCircle} size="4x"/>
            <div className="altText">
                {isCorrect ? <p>Correct</p> : <p>Incorrect</p>}
            </div>
            {blurb}
        </div>
    )
}

export default KnowledgeCheckFeedback;
