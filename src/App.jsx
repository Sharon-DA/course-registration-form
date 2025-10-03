import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Course Registration System</h1>
        <p className="subtitle">Join our online learning community and advance your skills</p>
      </header>
      <main>
        <RegistrationForm />
      </main>
      <footer>
        <p>&copy; 2024 eLearning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
