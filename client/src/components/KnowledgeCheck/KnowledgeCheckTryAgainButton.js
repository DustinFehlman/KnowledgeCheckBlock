import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckTryAgainButton({resetState, submittedAnswer}) {
    const isActiveClass = submittedAnswer ? "tryAgainButtonContainerActive" : "tryAgainButtonContainer";
    return (
        <div className={isActiveClass} onClick={resetState}>
            <p className="altText">Try Again</p>
            <FontAwesomeIcon icon={faSync} size="2x"/>
        </div>)
}

export default KnowledgeCheckTryAgainButton;