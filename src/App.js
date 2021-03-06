import "./App.css";
import React, { useState } from "react";
import Nike from './Nike.jpg';
function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
      <>
      <header className="main">
        <h1>LetsGrowMore</h1>
        <navi className="app__navbar">
        
        <ul className='app__navbar-links'>
        <div className='app__navbar-logo'>
                <img id="img" src={Nike} alt="logo" />
            </div>
                {['home', 'about', 'work', 'contact'].map((item) => (
                    <li id="li"
                        key={`link-${item}`}
                        className='app__flex p-text'
                    >
                        <a id="at" href={`#${item}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            </navi>
            <center>
        <div className="btn" onClick={getUsers}>
          FETCH USERS
        </div>
        </center>
        <br></br>
        <br></br>

      </header>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;