import React from 'react';
import Image from "../Image";

function KnowledgeCheckQuestion({question}) {
    return (
        <>
            {question && question.text && <h3>{question.text}</h3>}
            {question && question.img && <Image src={question.img} width="100%"/>}
        </>
    )
}

export default KnowledgeCheckQuestion;
