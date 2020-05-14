import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckFeedback({submittedAnswer}) {
    const activeClass = submittedAnswer ? "feedbackContainerActive" : "feedbackContainer"
    const prevSubmittedAnswerRef = useRef();
    const prevSubmittedAnswer = prevSubmittedAnswerRef.current;

    useEffect(() => {
        prevSubmittedAnswerRef.current = submittedAnswer;
    });

    return (
        <div className={activeClass}>
            {_getFeedback(!submittedAnswer ? prevSubmittedAnswer : submittedAnswer)}
        </div>
    )
}

function _getFeedback(submittedAnswer) {
    if (submittedAnswer && submittedAnswer.isCorrect === true) {
        return (
            <>
                <FontAwesomeIcon icon={faCheck} size="4x"/>
                <div className="altText">
                    <p>Correct</p>
                </div>
                {submittedAnswer.blurb}
            </>)
    }
    if (submittedAnswer && submittedAnswer.isCorrect === false) {
        return (
            <>
                <FontAwesomeIcon icon={faExclamationCircle} size="4x"/>
                <div className="altText">
                    <p>Incorrect</p>
                </div>
                {submittedAnswer.blurb}
            </>)
    }
}

export default KnowledgeCheckFeedback;
