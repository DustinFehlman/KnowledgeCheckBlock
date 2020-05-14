import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import KnowledgeCheck from './components/KnowledgeCheck';
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <KnowledgeCheck/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);
