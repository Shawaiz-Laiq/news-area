import './App.css';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  return (
    <div>
      <div style={{ filter: showLogin ? "blur(5px)" : "none", pointerEvents: showLogin ? "none" : "auto" }}>
        <NavBar onLoginClick={() => setShowLogin(true)} onLogoutClick={()=> {setUsername("") ; setShowLogin(false); setUseremail("")}} username={username} useremail={useremail} /> 
      </div>
      {showLogin && (
        <div>
          <Login closeLogin={() => setShowLogin(false)} onLoginSuccess={(name) => setUsername(name)} onLoginSuccessEmail={(email) => setUseremail(email)} />
        </div>
      )}
    </div>
  );
}

export default App;
