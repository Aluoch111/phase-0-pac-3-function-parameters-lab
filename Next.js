import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Header from "./Header";

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[]);

  return (
    <>

        <div className="banner_title"><Header/></div>
        <div class="banner">
          <div class="mini">
            <NavBar user={user} setUser={setUser} />
          </div>
        </div>

      <main>
        {user ? (
          <Routes>
            <Route path="/">
            element = {<Home user={user}/>}
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element = { <SignUp setUser={setUser} />} />
            <Route path="/login" element = {<Login  setUser={setUser} />}  />
            <Route path="/" element = {<Home />} />
          </Routes>
        )}
      </main>
    </>
  );
}
   {/* { msg ?(
              <h4></h4>
            ):(<h2>Invalid username or password</h2>)} */}

export default App;