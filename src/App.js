import "./App.css";
import { useState } from "react";
import MainMint from "./MainMint";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App relative h-full">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint>
        <Footer />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
