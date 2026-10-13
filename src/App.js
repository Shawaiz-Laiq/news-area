import './App.css';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import { useState } from 'react';
import SecNav from './Component/SecNav';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  return (
    <div>
      <div style={{ filter: showLogin ? "blur(5px)" : "none", pointerEvents: showLogin ? "none" : "auto" }}>
        <NavBar onLoginClick={() => setShowLogin(true)} onLogoutClick={()=> {setUsername("") ; setShowLogin(false); setUseremail("")}} username={username} useremail={useremail} /> 
        <SecNav/>     
      </div>
      {showLogin && (
        <div   style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999999,
      background: "rgba(0,0,0,0.5)",
      display: "grid",
      placeItems: "center"
    }}> 
          <Login  closeLogin={() => setShowLogin(false)} onLoginSuccess={(name) => setUsername(name)} onLoginSuccessEmail={(email) => setUseremail(email)} />
            
        </div>
      )}
      
    </div>
  );
}

export default App;
