import React from 'react';
import {render} from '@testing-library/react';
import KnowledgeCheckContainer from './components/KnowledgeCheck/KnowledgeCheckContainer';

test('renders learn react link', () => {
    const {getByText} = render(<KnowledgeCheckContainer/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
