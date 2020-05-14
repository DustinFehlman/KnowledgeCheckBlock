import React from 'react'
import '@testing-library/jest-dom';
import {render, screen,} from '@testing-library/react';
import ReactDOM from "react-dom";
import KnowledgeCheckTryAgainButton from "../KnowledgeCheckTryAgainButton.js";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KnowledgeCheckTryAgainButton/>, div);
});

test('shows try again button', () => {
    const submittedAnswer = 'Test Answer'
    render(<KnowledgeCheckTryAgainButton submittedAnswer={submittedAnswer}/>)
    expect(screen.queryByText("Try Again").closest('p'))
})

test('hides try again button', () => {
    const submittedAnswer = null
    render(<KnowledgeCheckTryAgainButton submittedAnswer={submittedAnswer}/>)
    expect(screen.getByRole("button").className === "tryAgainButtonContainer");
})