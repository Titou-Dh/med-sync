// MainContent.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Content1 = () => {
    <div className='text-center'>Content for Link 1</div>
};
const Content2 = () => <div>Content for Link 2</div>;
const Content3 = () => <div>Content for Link 3</div>;

const MainContent = () => {
    return (
        <div className="p-4">
            {/* Use Switch and Route for handling different content based on the route */}
                <Routes>
                    <Route index component={Content1} />
                    <Route path="/dashboard/link2" component={Content2} />
                    <Route path="/dashboard/link3" component={Content3} />
                </Routes>
        </div>
    );
};

export default MainContent;
