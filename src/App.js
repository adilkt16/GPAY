import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route , Navigate } from "react-router-dom";
import { BalanceProvider } from "./components/Inner/BalanceContext" ;


import FirstPage from './components/FirstPage' ;
import Enter from './components/Enter' ;
import Balance from './components/Inner/Balance' ;
import Transaction from './components/Inner/Transaction' ;
import Editor from './components/Inner/Editor' ;


export default function App() {
  const [showFirstPage, setShowFirstPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstPage(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <BalanceProvider>
      <Router>
        <Routes>
            <Route path="/" element={showFirstPage ? <FirstPage /> : <Navigate to="/enter" />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </BalanceProvider>
    {/* <Router>
      <FirstPage />
      <Enter />
    </Router> */}
    </>
  )
}

