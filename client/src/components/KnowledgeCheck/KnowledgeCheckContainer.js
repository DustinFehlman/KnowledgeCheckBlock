import React, {useEffect, useState} from 'react';
import KnowledgeCheckQuestion from './KnowledgeCheckQuestion'
import KnowledgeCheckAnswerOption from "./KnowledgeCheckAnswerOption";
import KnowledgeCheckFeedback from "./KnowledgeCheckFeedback";
import KnowledgeCheckTryAgainButton from "./KnowledgeCheckTryAgainButton";
import Button from "../Button";
import './styles.scss';
import FetchUtil from '../../util/FetchUtil';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

function KnowledgeCheckContainer() {
    const [question, setQuestion] = useState({
        data: null,
        isLoading: true,
        hasError: false
    });
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            const options = {
                method: 'GET'
            }
            const url = '/api/getQuestion';
            const response = await FetchUtil.request(url, options);
            if (response instanceof Error) {
                setQuestion({
                    data: null,
                    isLoading: false,
                    hasError: true
                });
            } else {
                setQuestion({
                    data: response,
                    isLoading: false,
                    hasError: false
                });
            }
        }
        fetchQuestion();
    }, []);


    const {
        data,
        isLoading,
        hasError
    } = question;

    return (
            <div className="wrapper">
                {isLoading &&
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faSpinner} size="4x" spin/>
                </div>
                }
                {!isLoading && hasError &&
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faExclamationCircle} size="4x"/>
                    <p>There was an error loading this block.</p>
                </div>
                }
                {!isLoading && !hasError &&
                <>
                    <KnowledgeCheckQuestion
                        question={
                            {
                                "text": data.text,
                                "img": data.imgUrl
                            }
                        }
                    />
                    <hr className="quizDivider"/>
                    {_getAnswerOptions(data.answers, selectedAnswer, setSelectedAnswer, submittedAnswer)}
                    <div className={!submittedAnswer ? "fadeIn" : "fadeOut"}>
                        <Button value={"Submit"} isDisabled={!Boolean(selectedAnswer)}
                                onClick={() => _submitAnswer(selectedAnswer, setSubmittedAnswer)}/>
                    </div>
                    <KnowledgeCheckFeedback submittedAnswer={submittedAnswer}/>
                    <KnowledgeCheckTryAgainButton submittedAnswer={submittedAnswer}
                                                  resetState={() => _resetState(setSubmittedAnswer, setSelectedAnswer)}/>
                </>
                }
            </div>
    );
}

function _getAnswerOptions(answers, selectedAnswer, setSelectedAnswer, submittedAnswer) {
    const elementArray = [];
    answers.forEach(element => {
        elementArray.push(
            <div key={element.id}>
                <KnowledgeCheckAnswerOption
                    answer={element}
                    setSelectedAnswer={setSelectedAnswer}
                    selectedAnswer={selectedAnswer}
                    submittedAnswer={submittedAnswer}/>
            </div>
        )
    })
    return elementArray;
}

function _submitAnswer(selectedAnswer, setSubmittedAnswer) {
    if (!selectedAnswer) {
        return
    }
    setSubmittedAnswer(selectedAnswer);
}

function _resetState(setSubmittedAnswer, setSelectedAnswer) {
    setSubmittedAnswer(null);
    setSelectedAnswer(null);
}

export default KnowledgeCheckContainer;
