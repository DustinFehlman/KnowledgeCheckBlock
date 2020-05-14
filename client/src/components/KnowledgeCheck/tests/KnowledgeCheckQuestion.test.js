import React from 'react'
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom";
import KnowledgeCheckQuestion from "../KnowledgeCheckQuestion";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KnowledgeCheckQuestion/>, div);
});

test('shows test question', () => {
    const testQuestion = 'Test Question'
    render(<KnowledgeCheckQuestion question={testQuestion}/>)
    expect(screen.queryByText(testQuestion))
})
