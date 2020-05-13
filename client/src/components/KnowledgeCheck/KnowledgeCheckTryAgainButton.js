import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckTryAgainButton({resetState}) {
    return (
        <div className="tryAgainButtonContainer" onClick={resetState}>
            <p className="altText">Try Again</p>
            <FontAwesomeIcon icon={faSync} size="4x"/>
        </div>)
}

export default KnowledgeCheckTryAgainButton;