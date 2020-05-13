import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

function KnowledgeCheckAnswerOption({answer, selectedAnswer, setSelectedAnswer, submittedAnswer}) {
    const isChecked = selectedAnswer === answer;
    return (
        <div className={_getContainerClassName(submittedAnswer, answer)} onClick={() => setSelectedAnswer(answer)}>
            <label className={submittedAnswer ? "customRadioContainerSubmitted" : "customRadioContainer"}>
                {submittedAnswer &&
                <div className={"radioFeedbackIcons"}>
                    <FontAwesomeIcon icon={answer.isCorrect ? faThumbsUp : faThumbsDown}/>
                </div>}
                {answer.text}
                {!submittedAnswer && <input type="radio"
                                            value={answer}
                                            checked={isChecked}
                                            readOnly={true}/>}
                {!submittedAnswer && <span className="customRadio"></span>}
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
