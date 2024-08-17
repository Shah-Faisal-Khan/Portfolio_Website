import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Work from './pages/work'; // Import the new Work page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/work" element={<Work />} /> {/* Define route for Work page */}
            </Routes>
        </Router>
    );
}

export default App;
