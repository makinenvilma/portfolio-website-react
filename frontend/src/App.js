import React from 'react';
import Navbar from './components/navigation/Navbar';
import styles from './App.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Render Navbar component */}
      <header>
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <p>This is a test.</p>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
