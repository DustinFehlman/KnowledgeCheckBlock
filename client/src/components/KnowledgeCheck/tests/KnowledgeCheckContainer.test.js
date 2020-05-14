import React from 'react'
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ReactDOM from "react-dom";
import KnowledgeCheckContainer from "../KnowledgeCheckContainer";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KnowledgeCheckContainer/>, div);
});
