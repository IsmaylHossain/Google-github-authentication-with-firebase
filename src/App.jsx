 
import { useState } from 'react';
import './App.css'
import app from './Firebase/Firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
 

function App() {
  const [user, setUser] = useState(null)
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const githubprovider = new GithubAuthProvider();
const handleLogin = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user
    setUser(user);
    console.log(result.user)
  }).catch((error) => {
    console.log('error', error.message)
  })
  console.log( "hello");
}

const handleGithubLogin = () => {
  signInWithPopup(auth, githubprovider)
  .then((result) => {
    const user = result.user
    setUser(user);
    console.log(result.user)
  }).catch((error) => {
    console.log('error', error.message)
  })
  console.log( "hello");
}

const handleLogout = () => {
  signOut(auth)
  .then((result) => {
    
    setUser(null);
    console.log(result.user)
  }).catch((error) => {
    console.log('error', error.message)
  })
   
}
  
  return (
    <>
      <div>
         
      </div>
       
      <h1>Login Form</h1>
      <div className="card">
        {user?<button style={{backgroundColor : 'yellow'}} onClick={handleLogout}> Logout</button>
        : <div>
          <button style={{backgroundColor : 'yellow'}} onClick={handleLogin}>Google Login</button>
          <button style={{backgroundColor : 'yellow'}} onClick={handleGithubLogin}>Github Login</button>
        </div>
        }
        {user && <div>
        <p>
          user:  {user.displayName}
        </p>
        <p>Email: {user.email} </p>
        <img src={user.photoURL} alt="img" />
        </div>}
      </div>
      <p className="read-the-docs">
         
      </p>
    </>
  )
}

export default App
