import React, { useState } from 'react';
import RecaptchaComponent from './components/Recaptcha';
import './App.css';

function App() {

  const [isVerified, setIsVerified] = useState(false);

  const handleSubscribe = e => {
    e.preventDefault();
    
    if (isVerified) {
      alert('You have successfully subscribed!')
    } else {
      alert('Please verify that you are a human!')
    }
    
  }

  return (
    <div className="App">      
      <h1>Recaptcha Demo</h1>
      <label htmlFor='email'>Email</label> 
      <input type='email' name='email' id='email' placeholder='you@example.com' /> 
      <button onClick={handleSubscribe}>Subscribe</button>
      <RecaptchaComponent setIsVerified={setIsVerified} />
    </div>
  )
}

export default App;
