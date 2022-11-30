import React, { useEffect, useState } from 'react';
import './index.css';

import Today from '../Today';
import PreviousList from '../PreviousList';
import Header from '../Header';
import Stats from '../Stats';


function App() {

  const [date, setDate] = useState()
  const [user, setUser] = useState({})
  const [codewarsData, setCodewarsData] = useState({})

  useEffect(() => {
    function getDate() {
      let newDate = new Date();
      newDate = newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+ newDate.getDate();
      setDate(newDate);
    }
    getDate();
  }, [])

  return (
    <div className="app">
      <Header user={user} setUser={setUser}/>
      <main className="main">
        <div className="info">
          <Stats date={date} user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
        </div>
        <div className="days">
          <Today date={date} username={user.username}/>
          <PreviousList codewarsData={codewarsData} />
        </div>
      </main>
    </div>
  );
};

export default App;