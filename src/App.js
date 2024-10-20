import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SIMS PPOB Dashboard</h1>
      </header>
      <nav className="app-nav">
        <ul>
          <li>Home</li>
          <li>Transactions</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="app-main">
        <section className="dashboard">
          <h2>Welcome to SIMS PPOB</h2>
          <p>Manage your transactions efficiently.</p>
        </section>
        <section className="info">
          <h3>Latest Transactions</h3>
          <ul>
            <li>Payment ID: 12345 - Status: Success</li>
            <li>Payment ID: 12346 - Status: Pending</li>
            <li>Payment ID: 12347 - Status: Failed</li>
          </ul>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 SIMS PPOB. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
