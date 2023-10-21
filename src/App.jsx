import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./Stateprovider";


function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="App">
      { !user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />

          </div>
        </>

      )}

    </div>
  );
}

export default App;



// TdhjcuDEemg50Upa