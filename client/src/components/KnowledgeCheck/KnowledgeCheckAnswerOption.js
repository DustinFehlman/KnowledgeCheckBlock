import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckAnswerOption({answer, selectedAnswer, setSelectedAnswer, submittedAnswer}) {
    const isChecked = selectedAnswer === answer;
    return (
        <div className={_getContainerClassName(submittedAnswer, answer)} onClick={() => setSelectedAnswer(answer)}>
            <label id={answer.id ? answer.id : "No id provided"}
                   className={submittedAnswer ? "customRadioContainerSubmitted" : "customRadioContainer"}>
                {submittedAnswer &&
                <div className={"radioFeedbackIcons"}>
                    <FontAwesomeIcon icon={answer.isCorrect ? faThumbsUp : faThumbsDown}/>
                </div>}
                {answer.text ? answer.text : "No text provided"}
                {!submittedAnswer && <input type="radio"
                                            value={answer}
                                            checked={isChecked}
                                            readOnly={true}/>}
                {!submittedAnswer &&
                <span role="radiogroup" aria-labelledby={answer.id} className="customRadio"></span>}
            </label>
        </div>
    )
}

function _getContainerClassName(submittedAnswer, answer) {
    if (!submittedAnswer) return "kcAnswerOptionContainerPreSubmission";
    if (submittedAnswer && submittedAnswer.id === answer.id) return "kcAnswerOptionContainerAnswered";
    return "kcAnswerOptionContainerSubmitted"
}

export default KnowledgeCheckAnswerOption;
