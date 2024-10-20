import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from './ProfileForm';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>SIMS PPOB User Profile</h1>
            <ProfileForm />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
