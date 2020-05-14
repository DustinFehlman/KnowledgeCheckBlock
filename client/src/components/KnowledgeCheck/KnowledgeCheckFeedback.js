import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckFeedback({submittedAnswer}) {
    const isCorrect = submittedAnswer ? submittedAnswer.isCorrect : null;
    const blurb = submittedAnswer ? submittedAnswer.blurb : null;
    const activeClass = submittedAnswer ? "feedbackContainerActive" : "feedbackContainer"
    return (
        <div className={activeClass}>
            <FontAwesomeIcon icon={isCorrect ? faCheck : faExclamationCircle} size="4x"/>
            <div className="altText">
                {isCorrect ? <p>Correct</p> : <p>Incorrect</p>}
            </div>
            {blurb}
        </div>
    )
}

export default KnowledgeCheckFeedback;
