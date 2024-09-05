import "./App.css";
import { useState } from "react";
import MainMint from "./MainMint";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay opacity-85 w-full h-full z-10 fixed top-5 left-5">
      <div className="App relative h-full text-center text-white">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint>
        <Footer />
      </div>
      <div className="-z-10 absolute top-0 left-0 right-0 bottom-0 bg-[url('./assets/bg/city2.webp')] bg-no-repeat bg-cover bg-fixed"></div>
    </div>
  );
}

export default App;
