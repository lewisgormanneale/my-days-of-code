import React, { useEffect, useState } from 'react';
import './index.css';

import Today from '../Today';
import PreviousList from '../PreviousList';
import Header from '../Header';
import Stats from '../Stats';


function App() {

  const [date, setDate] = useState(Date())
  const [user, setUser] = useState("lewisgormanneale")
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
      <Today date={date} user={user}/>
      <Stats date={date} user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData}/>
      <PreviousList />
    </div>
  );
}

export default App;