import React from 'react'
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom";
import KnowledgeCheckFeedback from "../KnowledgeCheckFeedback";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KnowledgeCheckFeedback/>, div);
});

test('shows correct answer feedback', () => {
    render(<KnowledgeCheckFeedback submittedAnswer={{isCorrect: true}}/>)
    expect(screen.queryByText("Correct"))
})

test('shows incorrect answer feedback', () => {
    render(<KnowledgeCheckFeedback submittedAnswer={{isCorrect: false}}/>)
    expect(screen.queryByText("Incorrect"))
})
