import React from 'react'
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom";
import KnowledgeCheckAnswerOption from "../KnowledgeCheckAnswerOption";

const mockAnswer = {text: 'Test answer', id: 1, isCorrect: true}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KnowledgeCheckAnswerOption answer={mockAnswer}/>, div);
});

test('shows test answer', () => {
    const answer = 'Test answer'
    render(<KnowledgeCheckAnswerOption answer={mockAnswer}/>)
    expect(screen.queryByText(answer))
})
